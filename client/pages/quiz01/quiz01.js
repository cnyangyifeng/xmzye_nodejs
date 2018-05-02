const configs = require('../../config')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const QuizGrid = require('../../services/quizGrid')
const QuizUser = require('../../services/quizUser')

const QUIZ_STATE_LOADING = 0
const QUIZ_STATE_MAIN = 1
const QUIZ_STATE_SOLUTIONS = 2

const MUTED_STATE_OFF = 0
const MUTED_STATE_ON = 1

Page({

  bgmAudioContext: null,
  countdownAudioContext: null,
  solutionsAudioContext: null,

  typingTimer: null,
  countdownTimer: null,

  /**
   * 页面的初始数据
   */

  data: {

    /**
     * quizUser = {
     *   quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *   quizUserInfo: Object,
     *   vip: 0,
     *   totalKeyCount: 10,
     *   muted: 0,
     *   createTime: '2018-04-23T05:51:53.000Z'
     *   lastVisitTime: '2018-04-23T05:51:53.000Z'
     * }
     */

    quizUser: null, // 当前 quizUser

    /**
     * quiz = {
     *   quizId: 1,
     *   bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/scarsong.mp3',
     *   timed: true,
     *   timeLimit: 120000,
     *   question: {
     *     questionId: 1,
     *     questionText: '',
     *     questionImage: {
     *       url: '',
     *       height: 546
     *     }
     *   solutions: [
     *     {
     *       solutionTag: '答案',
     *       solutionData: [
     *         {
     *           blockId: '1',
     *           blockType: 'normal-text',
     *           text: 'A'
     *         }
     *       ]
     *     },
     *     {
     *       solutionTag: '分析',
     *       solutionData: [
     *         {
     *           blockId: '1',
     *           blockType: 'normal-text',
     *           text: '注意观察树叶的数量'
     *         }
     *       ]
     *     }
     *   ]
     * }
     */

    quiz: null, // 当前 quiz
    reqQuizId: 0, // 当前请求的 quizId

    quizPlayed: 0,
    quizSolved: 0,

    /**
     * quizGrid = [
     *   {
     *     quizTabName: '1-100',
     *     quizCards: {
     *       quizId: 1,
     *       quizUnlocked: 1,
     *       quizPlayed: 0,
     *       quizSolved: 0,
     *       timeElapsed: 0,
     *       quizQuestionImageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q1/q1.svg'
     *     }
     *   }
     * ]
     */

    quizGrid: null, // quizGrid

    quizState: QUIZ_STATE_LOADING, // 当前页面状态

    animatingEnabled: true, // 是否启用动画
    typingQuestionText: '',
    questionImageVisible: false,
    actionbarVisible: false,

    countingDownEnabled: true, // 是否启用计时
    timeElapsed: 0,
    timeRemainingInSeconds: 0, // 剩余时间
    percent: 0, // 进度百分比

    redisplayFromHiding: false, // 是 “隐藏页面” 操作以后的页面重新显示
    redisplayFromSharing: false // 是 “分享页面” 操作以后的页面重新显示
  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    const quizId = parseInt(options.quiz_id)
    console.debug(`当前 quizId: `, quizId)
    // 如果 quizId 不存在
    if (!quizId) {
      console.debug(`跳转至 home 页面`)
      wx.redirectTo({
        url: `../home/home`
      })
      return
    }
    // 更新页面数据 reqQuizId
    this.setData({
      reqQuizId: quizId
    })
    // 初始化 countdown 音效，solutions 音效
    this.initCountdownAudioContext()
    this.initSolutionsAudioContext()
  },

  /**
   * 监听页面初次渲染完成
   */

  onReady: function () {
  },

  /**
   * 监听页面显示
   */

  onShow: function () {
    // 确保用户已登录
    loginService.ensureLoggedIn().then(() => {
      // 更新页面数据 quizUser
      this.setData({
        quizUser: QuizUser.get()
      })
      // 初始化 quizGrid
      this.initQuizGrid().then(() => {
        // 更新页面数据 quizGrid
        this.setData({
          quizGrid: QuizGrid.get()
        })
        // 如果是 “分享页面” 操作以后的页面重新显示
        if (this.data.redisplayFromSharing) {
          this.setData({
            redisplayFromSharing: false
          })
          // 不执行后续操作
          return
        }
        // 更新页面数据 quizPlayed, timeElapsed, quizSolved
        const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
        const quizTabIndex = this.data.quizUser.currentQuizTabIndex
        const quizGrid = this.data.quizGrid
        const quizCard = quizGrid[quizTabIndex].quizCards[quizCardIndex]
        this.setData({
          quizPlayed: quizCard.quizPlayed,
          timeElapsed: quizCard.timeElapsed,
          quizSolved: quizCard.quizSolved
        })
        // 获取 quiz
        this.requestQuiz().then(() => {
          // 初始化 bgm 音效
          this.initBgmAudioContext(this.data.quiz.bgmUrl)
          // 更新页面数据 quizState
          this.setData({
            quizState: QUIZ_STATE_MAIN
          })
          // 播放 quiz
          this.playQuiz()
        })
      })
    })
  },

  /**
   * 监听页面隐藏
   */

  onHide: function () {
    // 尚未开始动画，则禁用动画
    this.disableAnimating()
    // 已经开始播放动画，则停止播放动画
    this.stopAnimating()
    // 尚未开始计时，则禁用计时
    this.disableCountingDown()
    // 已经开始计时，则停止计时
    this.clearCountingDown()
    // 已经开始播放 solutions，则停止播放 solutions
    this.stopPlayingSolutions()
    // 更新页面数据 redisplayFromHiding
    this.setData({
      redisplayFromHiding: true
    })
  },

  /**
   * 监听页面卸载
   */

  onUnload: function () {
    // 尚未开始动画，则禁用动画
    this.disableAnimating()
    // 已经开始播放动画，则停止播放动画
    this.stopAnimating()
    // 尚未开始计时，则禁用计时
    this.disableCountingDown()
    // 已经开始计时，则停止计时
    this.clearCountingDown()
    // 已经开始播放 solutions，则停止播放 solutions
    this.stopPlayingSolutions()
  },

  /**
   * 监听用户下拉动作
   */

  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */

  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */

  onShareAppMessage: function () {
    // 尚未开始动画，则禁用动画
    this.disableAnimating()
    // 已经开始播放动画，则停止播放动画
    this.stopAnimating()
    // 尚未开始计时，则禁用计时
    this.disableCountingDown()
    // 已经开始计时，则停止计时
    this.clearCountingDown()
    return {
      title: `原来你也是侦探？！快来帮我破案~`,
      path: `/pages/home/home?quiz_id=${this.data.reqQuizId}&referrer_id=${this.data.quizUser.quizUserId}`,
      success: res => {
        console.debug(`转发成功`)
        // 如果未破案
        if (!this.data.quizSolved) {
          // 更新页面数据 quizState
          this.setData({
            quizState: QUIZ_STATE_SOLUTIONS
          })
          // 播放 solutions
          this.playSolutions()
        }
        // 显示动画结果
        this.setData({
          typingQuestionText: this.data.quiz.question.questionText,
          questionImageVisible: true,
          actionbarVisible: true
        })
        // 缓存 quizPlayed
        this.saveQuizAsPlayed()
        // 缓存 timeElapsed
        this.setData({
          timeElapsed: this.data.quiz.timeLimit,
          timeRemainingInSeconds: 0,
          percent: 0
        })
        this.saveTimeElapsed()
        // 缓存 quizSolved
        this.saveQuizAsSolved()
        // 更新页面数据 redisplayFromSharing
        this.setData({
          redisplayFromSharing: true
        })
      },
      fail: err => {
        console.debug(`取消转发`)
      }
    }
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 addKeyButton
   */

  addKeyButtonTap: function () {
    console.debug(`点击 addKeyButton`)
    this.purchase()
  },

  /**
   * 绑定事件：点击 homeControl
   */

  homeControlTap: function () {
    console.debug(`点击 homeControl`)
    // 跳转至 home 页面
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 绑定事件：点击 bgmControl
   */

  bgmControlTap: function () {
    console.debug(`点击 bgmControl`)
    if (this.data.percent <= 0) {
      console.debug(`进度百分比 <=0 时，不允许操作 bgmControl`)
      return
    }
    const muted = this.data.quizUser.muted
    // 如果已开启静音模式
    if (muted === MUTED_STATE_ON) {
      // 播放 bgm 音效、countdown 音效
      if (this.bgmAudioContext) {
        console.debug(`播放 bgm 音效`)
        this.bgmAudioContext.play()
      }
      if (this.countdownAudioContext) {
        console.debug(`播放 countdown 音效`)
        this.countdownAudioContext.play()
      }
      // 更新页面数据 quizUser.muted
      const quizUser = this.data.quizUser
      quizUser.muted = MUTED_STATE_OFF
      this.setData({
        quizUser: quizUser
      })
      // 更新缓存数据 quizUser.muted
      QuizUser.set(quizUser)
    } else { // 如果已开启正常播放模式
      // 暂停 bgm 音效、countdown 音效
      console.debug(`暂停 bgm 音效`)
      this.bgmAudioContext.pause()
      console.debug(`暂停 countdown 音效`)
      this.countdownAudioContext.pause()
      // 更新页面数据 quizUser.muted
      const quizUser = this.data.quizUser
      quizUser.muted = MUTED_STATE_ON
      this.setData({
        quizUser: quizUser
      })
      // 更新缓存数据 quizUser.muted
      QuizUser.set(quizUser)
    }
  },

  /**
   * 绑定事件：点击 viewSolutionsButtonTap
   */

  viewSolutionsButtonTap: function () {
    console.debug(`点击 viewSolutionsButton`)
    // 更新页面数据 quizState
    this.setData({
      quizState: QUIZ_STATE_SOLUTIONS
    })
  },

  /**
   * 绑定事件：点击 undoButton
   */

  undoButtonTap: function () {
    console.debug(`点击 undoButton`)
    // 更新页面数据 quizState
    this.setData({
      quizState: QUIZ_STATE_MAIN
    })
  },

  /**
   * 绑定事件：点击 nextButton
   */

  nextButtonTap: function () {
    console.debug(`点击 nextButton`)
    // 停止播放 solutions
    this.stopPlayingSolutions()
    // 解锁 quiz
    const quizId = this.data.reqQuizId
    const nextQuizId = (quizId === 1000) ? 1 : quizId + 1
    // 获取 quizCard
    const nextQuizCardIndex = this.getQuizCardIndexByQuizId(nextQuizId)
    this.unlockQuiz(nextQuizCardIndex).then(() => {
      // 跳转页面
      wx.redirectTo({
        url: `/pages/quiz01/quiz01?quiz_id=${nextQuizId}`
      })
    }, () => {
      // 显示弹窗
      wx.showModal({
        title: msgs.insufficient_keys_title,
        content: msgs.insufficient_keys_content,
        confirmText: msgs.unlock_all_title,
        success: res => {
          if (res.confirm) {
            this.purchase()
          }
        }
      })
    })
  },

  /* ================================================================================ */

  /**
   * 初始化 quizGrid
   */

  initQuizGrid: function () {
    return new Promise((resolve, reject) => {
      // 如果缓存数据 QuizGrid 存在
      if (QuizGrid.get()) {
        // 直接返回操作成功
        resolve()
      } else { // 否则，初始化 quizGrid
        console.debug(`初始化 quizGrid`)
        let quizGrid = []
        for (let i = 0; i < 10; i++) {
          let quizTab = { quizTabName: `${100 * i + 1}-${100 * (i + 1)}` }
          let quizCards = []
          for (let j = 0; j < 100; j++) {
            const quizId = 100 * i + j + 1
            const quizCard = {
              quizId: quizId,
              quizUnlocked: 0,
              quizPlayed: 0,
              timeElapsed: 0,
              quizSolved: 0,
              quizQuestionImageUrl: ''
            }
            quizCards.push(quizCard)
          }
          quizTab['quizCards'] = quizCards
          quizGrid.push(quizTab)
        }
        QuizGrid.set(quizGrid)
      }
    })
  },

  /**
   * 获取 quiz
   */

  requestQuiz: function () {
    return new Promise((resolve, reject) => {
      // 如果页面数据 quiz 存在
      if (this.data.quiz) {
        // 直接返回操作成功
        resolve()
      } else {
        qcloud.request({
          url: `${configs.weapp}/quizzes/${this.data.reqQuizId}`,
          success: res => {
            // 更新页面数据 quiz
            console.debug(`获取 quiz 成功`)
            this.setData({
              quiz: res.data.data
            })
            // 操作成功
            resolve()
          },
          fail: err => {
            console.debug(`获取 quiz 失败`)
            // 跳转至 home 页面
            wx.navigateBack({
              delta: 1
            })
            // 操作失败
            // reject()
          }
        })
      }
    })
  },

  /**
   * 播放 quiz
   */

  playQuiz: function () {
    // 如果 quiz 未播放完毕
    if (this.data.quizPlayed === 0) {
      setTimeout(() => {
        // 播放动画
        this.animating().then(() => {
          // 缓存 quizPlayed
          this.saveQuizAsPlayed()
          // 开始计时
          this.countingDown()
        })
      }, 800)
    } else if (this.data.quizPlayed === 1) { // 如果 quiz 已播放完毕
      // 显示动画结果
      this.setData({
        typingQuestionText: this.data.quiz.question.questionText,
        questionImageVisible: true,
        actionbarVisible: true
      })
      // 开始计时
      this.countingDown()
    }
  },

  /**
   * 播放动画
   */

  animating: function () {
    return new Promise((resolve, reject) => {
      // 如果是 “隐藏页面” 操作以后的页面重新显示
      if (this.data.redisplayFromHiding) {
        this.setData({
          animatingEnabled: true
        })
      }
      // 启用动画
      if (this.data.animatingEnabled) {
        // 播放 bgm 音效
        if (this.data.quizUser.muted === MUTED_STATE_OFF) {
          if (this.bgmAudioContext) {
            console.debug(`播放 bgm 音效`)
            this.bgmAudioContext.play()
          }
        }
        // 播放动画
        let i = 0
        let typing = () => {
          // 每100毫秒显示一个字符
          this.typingTimer = setTimeout(() => {
            this.setData({
              typingQuestionText: this.data.quiz.question.questionText.substr(0, i++)
            })
            typing()
            if (i > this.data.quiz.question.questionText.length) {
              // 清除动画
              clearTimeout(this.typingTimer)
              // 延时显示 quiz 图片
              setTimeout(() => {
                this.setData({
                  questionImageVisible: true
                })
                // 延时显示 actionbar
                setTimeout(() => {
                  this.setData({
                    timeRemainingInSeconds: this.data.quiz.timeLimit / 1000,
                    actionbarVisible: true
                  })
                  // 操作成功
                  resolve()
                }, 1600)
              }, 800)
            }
          }, 100)
        }
        typing()
      }
    })
  },

  /**
   * 禁用计时
   */

  disableAnimating() {
    if (this.data.countingDownEnabled) {
      console.debug(`禁用计时`)
      this.setData({
        animatingEnabled: false
      })
    }
  },

  /**
   * 停止播放动画
   */

  stopAnimating() {
    // 停止 bgm 音效
    if (this.bgmAudioContext) {
      console.debug(`停止 bgm 音效`)
      this.bgmAudioContext.stop()
    }
    // 清除 typingTimer
    if (this.typingTimer) {
      console.debug(`清除 typingTimer`)
      clearTimeout(this.typingTimer)
      this.typingTimer = null
    }
  },

  /**
   * 开始计时
   */

  countingDown: function () {
    // 如果是 “隐藏页面” 操作以后的页面重新显示
    if (this.data.redisplayFromHiding) {
      this.setData({
        countingDownEnabled: true,
        redisplayFromHiding: false
      })
    }
    // 启用计时
    if (this.data.quiz.timed && this.data.countingDownEnabled) {
      const timeLimit = this.data.quiz.timeLimit
      let timeElapsed = this.data.timeElapsed, timeRemainingInSeconds, percent
      // 如果未超时
      if (timeElapsed < timeLimit) {
        console.debug(`开始计时`)
        // 播放 bgm 音效，countdown 音效
        if (this.data.quizUser.muted === MUTED_STATE_OFF) {
          if (this.bgmAudioContext) {
            console.debug(`播放 bgm 音效`)
            this.bgmAudioContext.play()
          }
          if (this.countdownAudioContext) {
            console.debug(`播放 countdown 音效`)
            this.countdownAudioContext.play()
          }
        }
        // 启动 countdownTimer
        console.debug(`启动 countdownTimer`)
        this.countdownTimer = setInterval(() => {
          // 每1000毫秒更新一次进度
          timeElapsed += 1000
          // 如果未超时
          if (timeElapsed <= timeLimit) {
            timeRemainingInSeconds = Math.floor((this.data.quiz.timeLimit - timeElapsed) / 1000)
            percent = 100 - Math.floor(timeElapsed * 100 / timeLimit)
            this.setData({
              timeElapsed: timeElapsed,
              timeRemainingInSeconds: timeRemainingInSeconds,
              percent: percent
            })
          } else { // 如果已超时
            // 停止计时
            this.clearCountingDown()
            // 更新页面数据 quizState
            this.setData({
              quizState: QUIZ_STATE_SOLUTIONS
            })
            // 播放 solutions
            this.playSolutions()
            // 缓存 quizSolved
            this.saveQuizAsSolved()
          }
        }, 1000)
      }
    }
  },

  /**
   * 禁用计时
   */

  disableCountingDown() {
    if (this.data.countingDownEnabled) {
      console.debug(`禁用计时`)
      this.setData({
        countingDownEnabled: false
      })
    }
  },

  /**
   * 停止计时
   */

  clearCountingDown() {
    // 停止 bgm 音效
    if (this.bgmAudioContext) {
      console.debug(`停止 bgm 音效`)
      this.bgmAudioContext.stop()
    }
    // 停止 countdown 音效
    if (this.countdownAudioContext) {
      console.debug(`停止 countdown 音效`)
      this.countdownAudioContext.stop()
    }
    // 清除 countdownTimer
    if (this.countdownTimer) {
      console.debug(`清除 countdownTimer`)
      clearInterval(this.countdownTimer)
      this.countdownTimer = null
    }
    // 缓存 timeElapsed
    this.saveTimeElapsed()
  },

  /**
   * 播放 solutions
   */

  playSolutions() {
    // 播放 solutions 音效
    if (this.data.quizUser.muted === MUTED_STATE_OFF) {
      if (this.solutionsAudioContext) {
        console.debug(`播放 solutions 音效`)
        this.solutionsAudioContext.play()
      }
    }
  },

  /**
   * 停止播放 solutions
   */

  stopPlayingSolutions() {
    // 停止 solutions 音效
    if (this.solutionsAudioContext) {
      console.debug(`停止 solutions 音效`)
      this.solutionsAudioContext.stop()
    }
  },

  /**
   * 解锁 quiz
   */

  unlockQuiz: function (quizCardIndex) {
    return new Promise((resolve, reject) => {
      const quizGrid = this.data.quizGrid
      const quizTabIndex = this.data.quizUser.currentQuizTabIndex
      const quizCard = quizGrid[quizTabIndex].quizCards[quizCardIndex]
      // 如果当前 quizCard 未解锁
      if (quizCard.quizUnlocked === 0) {
        // 如果当前用户的钥匙数量足够
        if (this.data.quizUser.totalKeyCount > 0) {
          // 解锁 quiz
          console.debug(`解锁 quiz: `, quizCard.quizId)
          quizCard.quizUnlocked = 1
          this.setData({
            quizGrid: quizGrid
          })
          QuizGrid.set(quizGrid)
          // 消耗 1 把钥匙
          const quizUser = this.data.quizUser
          quizUser.totalKeyCount--
          this.setData({
            quizUser: quizUser
          })
          QuizUser.set(quizUser)
          // 操作成功
          resolve()
        } else { // 如果当前用户的钥匙数量不足
          // 操作失败
          reject()
        }
      } else { // 如果当前 quizCard 已解锁
        // 直接返回操作成功
        resolve()
      }
    })
  },

  /**
   * 初始化 bgmAudioContext
   */

  initBgmAudioContext: function (bgmUrl) {
    console.debug(`初始化 bgm 音效`)
    this.bgmAudioContext = wx.createInnerAudioContext()
    this.bgmAudioContext.src = bgmUrl
    this.bgmAudioContext.autoplay = false
    this.bgmAudioContext.loop = true
    this.bgmAudioContext.obeyMuteSwitch = false
    this.bgmAudioContext.onPlay(() => {
      console.debug('bgm audio on play')
    })
    this.bgmAudioContext.onPause(() => {
      console.debug('bgm audio on pause')
    })
    this.bgmAudioContext.onStop(() => {
      console.debug('bgm audio on stop')
    })
    this.bgmAudioContext.onEnded(() => {
      console.debug('bgm audio on ended')
    })
  },

  /**
   * 初始化 countdownAudioContext
   */

  initCountdownAudioContext: function () {
    console.debug(`初始化 countdown 音效`)
    this.countdownAudioContext = wx.createInnerAudioContext()
    this.countdownAudioContext.src = '/assets/audios/ticking.mp3'
    this.countdownAudioContext.autoplay = false
    this.countdownAudioContext.loop = true
    this.countdownAudioContext.obeyMuteSwitch = false
    this.countdownAudioContext.onPlay(() => {
      console.debug('countdown audio on play')
    })
    this.countdownAudioContext.onPause(() => {
      console.debug('countdown audio on pause')
    })
    this.countdownAudioContext.onStop(() => {
      console.debug('countdown audio on stop')
    })
    this.countdownAudioContext.onEnded(() => {
      console.debug('countdown audio on ended')
    })
  },

  /**
   * 初始化 solutionsAudioContext
   */

  initSolutionsAudioContext: function () {
    console.debug(`初始化 solutions 音效`)
    this.solutionsAudioContext = wx.createInnerAudioContext()
    this.solutionsAudioContext.src = '/assets/audios/mot.mp3'
    this.solutionsAudioContext.autoplay = false
    this.solutionsAudioContext.obeyMuteSwitch = false
    this.solutionsAudioContext.onPlay(() => {
      console.debug('solutions audio on play')
    })
    this.solutionsAudioContext.onPause(() => {
      console.debug('solutions audio on pause')
    })
    this.solutionsAudioContext.onStop(() => {
      console.debug('solutions audio on stop')
    })
    this.solutionsAudioContext.onEnded(() => {
      console.debug('solutions audio on ended')
    })
  },

  /**
   * 缓存 quizPlayed
   */

  saveQuizAsPlayed: function () {
    console.debug(`缓存 quizPlayed`)
    // 更新页面数据 quizPlayed
    this.setData({
      quizPlayed: 1
    })
    // 更新缓存数据 quizGrid
    const remainder = this.data.reqQuizId % 100
    const quizCardIndex = (remainder === 0) ? 99 : remainder - 1
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizPlayed = 1
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizQuestionImageUrl = this.data.quiz.question.questionImage.url
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 timeElapsed
   */

  saveTimeElapsed: function () {
    console.debug(`缓存 timeElapsed`)
    const remainder = this.data.reqQuizId % 100
    const quizCardIndex = (remainder === 0) ? 99 : remainder - 1
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].timeElapsed = this.data.timeElapsed
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 quizSolved
   */

  saveQuizAsSolved: function () {
    console.debug(`缓存 quizSolved`)
    // 更新页面数据 quizSolved
    this.setData({
      quizSolved: 1
    })
    // 更新缓存数据 quizGrid
    const remainder = this.data.reqQuizId % 100
    const quizCardIndex = (remainder === 0) ? 99 : remainder - 1
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizSolved = 1
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 根据 quizId 获取 quizCardIndex
   */

  getQuizCardIndexByQuizId: function (quizId) {
    const remainder = quizId % 100
    return (remainder === 0) ? 99 : remainder - 1
  },

  /**
   * 下单支付
   */

  purchase: function () {
    // 显示 loading 提示框
    wx.showLoading({
      title: msgs.loading_title,
      mask: true
    })
    // 调用微信支付统一下单接口
    qcloud.request({
      url: `${configs.weapp}/purchase/place_order`,
      login: true,
      success: res => {
        console.log(`下单成功：`, res)
        // 隐藏 loading 提示框
        wx.hideLoading()
        // 发起微信支付请求
        const payData = res.data.data
        wx.requestPayment({
          'timeStamp': payData.timeStamp,
          'nonceStr': payData.nonceStr,
          'package': payData.package,
          'signType': payData.signType,
          'paySign': payData.paySign,
          'success': res => {
            console.log(`支付成功：`, res)
            // 显示支付成功消息提示框
            wx.showToast({
              title: msgs.pay_success_title,
              mask: true
            })
            // 更新页面数据 quizUser
            const quizUser = this.data.quizUser
            quizUser.vip = 1
            quizUser.totalKeyCount = 9999
            this.setData({
              quizUser: quizUser
            })
            QuizUser.set(quizUser)
            // 解锁 quizGrid
            const quizGrid = this.data.quizGrid
            for (let i = 0; i < quizGrid.length; i++) {
              let quizCards = quizGrid[i].quizCards
              for (let j = 0; j < quizCards.length; j++) {
                quizCards[j].quizUnlocked = 1
              }
            }
            this.setData({
              quizGrid: quizGrid
            })
            QuizGrid.set(quizGrid)
          },
          'fail': err => {
            console.log(`支付失败：`, err)
            switch (err.errMsg) {
              case 'requestPayment:fail cancel':
                break
              default:
                wx.showToast({
                  title: msgs.pay_fail_title,
                  image: '/assets/images/warning.png',
                  mask: true
                })
            }
          }
        })
      },
      fail: err => {
        console.log(`下单失败：`, err)
        // 隐藏 loading 提示框
        wx.hideLoading()
        wx.showToast({
          title: msgs.request_fail_title,
          image: '/assets/images/warning.png',
          mask: true
        })
      }
    })
  }

})
