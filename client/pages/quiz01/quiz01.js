const configs = require('../../config')
const dateUtils = require('../../utils/dateUtils')
const msgs = require('../../msg')
const QuizGrid = require('../../services/quizGrid')
const quizGridBuilder = require('../../services/quizGridBuilder')
const QuizUser = require('../../services/quizUser')
const tunnelService = require('../../services/tunnelService')
const TunnelEvent = require('../../services/tunnelEvent')
const TunnelStatus = require('../../services/tunnelStatus')

const QUIZ_STATE_LOADING = 0
const QUIZ_STATE_MAIN = 1
const QUIZ_STATE_SOLUTIONS = 2

const MUTED_STATE_OFF = 0
const MUTED_STATE_ON = 1

const FEEDBACK_TITLE_RIGHT = '恭喜你，答对了！'
const FEEDBACK_TITLE_WRONG = '很遗憾，答错了...'

Page({

  bgmAudioContext: null,
  countdownAudioContext: null,
  optionAudioContext: null,
  solutionsAudioContext: null,

  countdownTimer: null,
  feedbackPanelAnimation: null,
  actionBarAnimation: null,

  /**
   * 页面的初始数据
   */

  data: {

    /**
     * quizUser = {
     *   quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *   referrerId: 'o-MYb5Bl8ACVPSATTQqRwlJCUsXk',
     *   quizUserInfo: Object,
     *   vip: 0,
     *   totalKeyCount: 5,
     *   muted: 0,
     *   currentQuizTabIndex: 0,
     *   currentQuizTabName: '1-100',
     *   createTime: '2018-04-23 05:51:53'
     *   lastVisitTime: '2018-04-23 05:51:53'
     * }
     */

    quizUser: null, // 当前 quizUser

    /**
     * quiz = {
     *   quizId: 1,
     *   quizType: 1/2,
     *   title: '莫尔夫人和离奇的鬼怪',
     *   bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/scarsong.mp3',
     *   timed: true,
     *   timeLimit: 120000,
     *   question: {
     *     questionId: 1,
     *     questionText: '',
     *     questionImage: {
     *       url: '',
     *       height: 630
     *     }
     *   options: {
     *     layout: 'row',
     *     optionsData: [
     *       {
     *         optionKey: 'A',
     *         optionData: [
     *           {
     *             blockId: '1',
     *             blockType: 'normal-text',
     *             text: '齐贝尔太太'
     *           }
     *         ]
     *       }
     *     ]
     *   },
     *   answerKey: 'C',
     *   answerArea: { x: 250, y: 85 },
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

    /**
     * quizGrid = [
     *   {
     *     quizTabName: '1-100',
     *     quizCards: [
     *       {
     *         quizId: 1,
     *         quizUnlocked: 1,
     *         quizLoaded: 1,
     *         quizQuestionImageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q1/q1.svg',
     *         timeElapsed: 0,
     *         myAnswerKey: 'N',
     *         myAnswerPoint: { x: 0, y: 0 },
     *         myAnswerFeedback: 0,
     *         quizSolved: 0
     *       }
     *     ]
     *   }
     * ]
     */

    quizGrid: null, // quizGrid

    quizState: QUIZ_STATE_LOADING, // 当前 quiz 状态

    countingDownEnabled: true, // 是否立刻禁用计时
    timeElapsed: 0,
    percent: 0, // 进度百分比

    myAnswerPoint: null,
    myAnswerKey: 'N', // 当前用户的答案
    myAnswerFeedback: 0,

    actionBarAnimationData: null,
    feedbackModalVisible: false,
    feedbackPanelAnimationData: null,
    feedbackTitle: FEEDBACK_TITLE_WRONG,
    quizSolved: 0, // 当前 quiz 是否解答完毕

    redisplayFromSharing: false, // 是否 “分享页面” 操作以后的页面重新显示
    redisplayFromHiding: false, // 是否 “隐藏页面” 操作以后的页面重新显示
  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    const reqQuizId = parseInt(options.quiz_id)
    console.debug(`当前 quizId: `, reqQuizId)
    // 更新页面数据 reqQuizId
    this.setData({
      reqQuizId: reqQuizId
    })
    // 初始化各种音效
    this.initCountdownAudioContext()
    this.initOptionAudioContext()
    this.initSolutionsAudioContext()
    // 初始化各种动画
    this.initAnimations()
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
    // 处理页面显示
    this.doShow()
  },

  /**
   * 监听页面隐藏
   */

  onHide: function () {
    // 处理页面隐藏
    this.doHide()
  },

  /**
   * 监听页面卸载
   */

  onUnload: function () {
    // 处理页面卸载
    this.doUnload()
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
    return {
      title: this.data.quiz.title,
      path: `/pages/home/home?quiz_id=${this.data.reqQuizId}&referrer_id=${this.data.quizUser.quizUserId}`,
      imageUrl: this.data.quiz.question.questionImage.url,
      success: res => {
        console.debug(`转发成功：`, res)
      },
      fail: err => {
        console.debug(`取消转发`)
      }
    }
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 bgmControl
   */

  bgmControlTap: function () {
    console.debug(`点击 bgmControl`)
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
      // 更新缓存数据 quizUser.muted
      const quizUser = this.data.quizUser
      quizUser.muted = MUTED_STATE_OFF
      this.setData({
        quizUser: quizUser
      })
      QuizUser.set(quizUser)
    } else { // 如果已开启正常播放模式
      // 暂停 bgm 音效、countdown 音效
      console.debug(`暂停 bgm 音效`)
      this.bgmAudioContext.pause()
      console.debug(`暂停 countdown 音效`)
      this.countdownAudioContext.pause()
      // 更新缓存数据 quizUser.muted
      const quizUser = this.data.quizUser
      quizUser.muted = MUTED_STATE_ON
      this.setData({
        quizUser: quizUser
      })
      QuizUser.set(quizUser)
    }
  },

  /**
   * 绑定事件：点击 optionButton
   */

  optionButtonTap: function (e) {
    if (this.data.quizSolved === 1) {
      return
    }
    const myAnswerKey = e.currentTarget.dataset.optionKey
    console.debug(`点击 optionButton, my answer: `, myAnswerKey)
    if (myAnswerKey === this.data.myAnswerKey) {
      // 更新页面数据 myAnswerKey
      this.setData({
        myAnswerKey: 'N'
      })
      // 播放 actionBar 动画 fadeOutDown
      this.actionBarAnimation.opacity(0).height(0).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })
      this.setData({
        actionBarAnimationData: this.actionBarAnimation.export()
      })
    } else {
      // 更新页面数据 myAnswerKey
      this.setData({
        myAnswerKey: myAnswerKey
      })
      // 播放 option 音效
      this.playOption()
      // 播放 actionBar 动画 fadeInUp
      this.actionBarAnimation.opacity(1).height(60).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })
      this.setData({
        actionBarAnimationData: this.actionBarAnimation.export()
      })
    }
    // 缓存 myAnswerKey
    this.cacheMyAnswerKey()
  },

  /**
   * 绑定事件：点击 questionImageMask
   */

  questionImageMaskTap: function (e) {
    if (this.data.quizSolved === 1) {
      return
    }
    const touchPoint = e.detail
    console.debug(`点击 questionImageMask, touchPoint: `, touchPoint)
    // 更新页面数据 myAnswerPoint
    const q = wx.createSelectorQuery()
    q.select('#questionImageMask')
      .boundingClientRect()
      .exec(res => {
        this.setData({
          myAnswerPoint: {
            x: touchPoint.x - res[0].left - 20,
            y: touchPoint.y - res[0].top - 20
          }
        })
        console.debug(`myAnswerPoint: `, this.data.myAnswerPoint)
        // 播放 option 音效
        this.playOption()
        // 播放 actionBar 动画 fadeInUp
        this.actionBarAnimation.opacity(1).height(60).step({
          duration: 200,
          timingFunction: 'ease-in-out'
        })
        this.setData({
          actionBarAnimationData: this.actionBarAnimation.export()
        })
        // 缓存 myAnswerPoint
        this.cacheMyAnswerPoint()
      })
  },

  /**
   * 绑定事件：点击 questionImageFoot
   */

  questionImageFootTap: function () {
    console.debug(`点击 questionImageFoot`)
    const questionImageUrl = this.data.quiz.question.questionImage.url
    const previewImageUrl = questionImageUrl.substring(0, questionImageUrl.lastIndexOf('.')) + '_hd.jpg'
    wx.previewImage({
      current: previewImageUrl,
      urls: [previewImageUrl]
    })
  },

  /**
   * 绑定事件：提交 myAnswerForm
   */

  myAnswerFormSubmit: function (e) {
    const formId = e.detail.formId
    console.debug(`点击 myAnswerForm, formId: `, formId)
    // 终止计时
    this.stopCountingDown()
    // 同步 quizUser
    this.syncQuizUser(formId)
    // 提交答案
    this.submitMyAnswer()
  },

  /**
   * 绑定事件：点击 feedbackModal
   */

  feedbackModalTap: function () {
    console.debug(`点击 feedbackModal`)
    // 答题反馈
    this.feedback()
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
    // 停止播放 solutions 音效
    this.stopPlayingSolutions()
    // 更新 quizUser.currentQuizTabIndex
    const quizId = this.data.reqQuizId
    const remainder = quizId % quizGridBuilder.QUIZ_CARD_COUNT_PER_TAB
    if (remainder === 0) {
      const quizUser = this.data.quizUser
      quizUser.currentQuizTabIndex++
      this.setData({
        quizUser: quizUser
      })
      QuizUser.set(quizUser)
    }
    // 根据 quizId 获取 quizCardIndex
    const nextQuizId = (quizId === quizGridBuilder.QUIZ_CARD_COUNT_PER_TAB * quizGridBuilder.QUIZ_TAB_COUNT) ? 1 : quizId + 1
    const nextQuizCardIndex = this.getQuizCardIndexByQuizId(nextQuizId)
    // 解锁 quiz
    const unlocked = this.unlockQuiz(nextQuizCardIndex)
    if (unlocked) {
      wx.redirectTo({
        url: `/pages/quiz01/quiz01?quiz_id=${nextQuizId}`
      })
    } else {
      // 跳转至 retention 页面
      wx.navigateTo({
        url: `../retention/retention`
      })
    }
  },

  /* ================================================================================ */

  /**
   * 处理页面隐藏
   */

  doShow: function () {
    // 更新页面数据 quizUser
    this.setData({
      quizUser: QuizUser.get()
    })
    // 构建 quizGrid
    quizGridBuilder.build().then(() => {
      // 更新页面数据 quizGrid
      this.setData({
        quizGrid: QuizGrid.get()
      })
      const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
      // 解锁当前 quiz
      const unlocked = this.unlockQuiz(quizCardIndex)
      if (unlocked) {
        // 更新页面数据
        const quizTabIndex = this.data.quizUser.currentQuizTabIndex
        const quizGrid = this.data.quizGrid
        const quizCard = quizGrid[quizTabIndex].quizCards[quizCardIndex]
        this.setData({
          quizUnlocked: quizCard.quizUnlocked,
          quizLoaded: quizCard.quizLoaded,
          timeElapsed: quizCard.timeElapsed,
          myAnswerKey: quizCard.myAnswerKey,
          myAnswerPoint: quizCard.myAnswerPoint,
          myAnswerFeedback: quizCard.myAnswerFeedback,
          quizSolved: quizCard.quizSolved
        })
        // 获取 quiz
        this.requestQuiz().then(() => {
          // 更新页面数据 quizAsLoaded
          this.setData({
            quizLoaded: 1
          })
          // 缓存 quizAsLoaded
          this.cacheQuizAsLoaded()
          // 初始化 bgm 音效
          this.initBgmAudioContext(this.data.quiz.bgmUrl)
          // 如果不是 “分享页面” 操作以后的页面重新显示
          if (!this.data.redisplayFromSharing) {
            // 更新页面数据 quizState
            this.setData({
              quizState: QUIZ_STATE_MAIN
            })
          } else {
            this.setData({
              redisplayFromSharing: false
            })
          }
          if (this.data.quizSolved === 1 || this.data.myAnswerKey !== 'N' || this.data.myAnswerPoint) {
            // 播放 actionBar 动画 fadeInUp
            this.actionBarAnimation.opacity(1).height(60).step({
              duration: 200,
              timingFunction: 'ease-in-out',
              delay: 400
            })
            this.setData({
              actionBarAnimationData: this.actionBarAnimation.export()
            })
          }
          // 开始计时
          this.countingDown()
        })
      } else {
        wx.navigateBack({
          delta: -1
        })
      }
    })
  },

  /**
   * 处理页面隐藏
   */

  doHide: function () {
    // 尚未开始计时，则禁用计时
    this.disableCountingDown()
    // 已经开始计时，则清除计时
    this.clearCountingDown()
    // 已经开始播放 solutions 音效，则停止播放 solutions 音效
    this.stopPlayingSolutions()
    // 更新页面数据 redisplayFromHiding
    this.setData({
      redisplayFromHiding: true
    })
  },

  /**
   * 处理页面卸载
   */

  doUnload: function () {
    // 尚未开始计时，则禁用计时
    this.disableCountingDown()
    // 已经开始计时，则清除计时
    this.clearCountingDown()
    // 已经开始播放 solutions 音效，则停止播放 solutions 音效
    this.stopPlayingSolutions()
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
        wx.request({
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
            wx.navigateBack({
              delta: -1
            })
            // 操作失败
            // reject()
          }
        })
      }
    })
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
      let timeElapsed = this.data.timeElapsed, percent
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
            percent = 100 - Math.floor(timeElapsed * 100 / timeLimit)
            this.setData({
              timeElapsed: timeElapsed,
              percent: percent
            })
          } else { // 如果已超时
            // 终止计时
            this.stopCountingDown()
            // 显示 “时间到” 弹窗
            wx.showModal({
              title: msgs.time_out_title,
              content: msgs.time_out_content,
              cancelText: msgs.wait_a_second_title,
              confirmText: msgs.ok_title,
              confirmColor: '#00ba80',
              success: res => {
                if (res.confirm) {
                  console.debug('答题超时，查看答案')
                  // 提交答案
                  this.submitMyAnswer()
                } else if (res.cancel) {
                  console.debug('答题超时，先不看答案')
                }
              }
            })
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
   * 终止计时
   */

  stopCountingDown() {
    // 清除计时
    this.clearCountingDown()
    // 更新页面数据
    this.setData({
      timeElapsed: this.data.quiz.timeLimit,
      percent: 0
    })
    // 缓存 timeElapsed
    this.cacheTimeElapsed()
  },

  /**
   * 清除计时
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
    this.cacheTimeElapsed()
  },

  /**
   * 播放 option 音效
   */

  playOption() {
    // 播放 option 音效
    if (this.data.quizUser.muted === MUTED_STATE_OFF) {
      if (this.optionAudioContext) {
        console.debug(`播放 option 音效`)
        if (!this.optionAudioContext.paused) {
          this.optionAudioContext.stop()
        }
        this.optionAudioContext.play()
      }
    }
  },

  /**
   * 播放 solutions 音效
   */

  playSolutions() {
    if (this.data.quizUser.muted === MUTED_STATE_OFF) {
      if (this.solutionsAudioContext) {
        console.debug(`播放 solutions 音效`)
        this.solutionsAudioContext.play()
      }
    }
  },

  /**
   * 停止播放 solutions 音效
   */

  stopPlayingSolutions() {
    if (this.solutionsAudioContext) {
      console.debug(`停止 solutions 音效`)
      this.solutionsAudioContext.stop()
    }
  },

  /**
   * 解锁 quiz
   */

  unlockQuiz: function (quizCardIndex) {
    let unlocked = false
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
        // 同步 quizUser
        this.syncQuizUser()
        unlocked = true
      } else { // 如果当前用户的钥匙数量不足
        unlocked = false
      }
    } else { // 如果当前 quizCard 已解锁
      unlocked = true
    }
    return unlocked
  },

  /**
   * 提交答案
   */

  submitMyAnswer() {
    // 播放 actionBar 动画 fadeOutDown
    this.actionBarAnimation.opacity(0).height(0).step({
      duration: 200,
      timingFunction: 'ease-in-out'
    })
    this.setData({
      actionBarAnimationData: this.actionBarAnimation.export()
    })
    // 检查答案
    this.checkMyAnswer()
    // 播放 solutions 音效
    this.playSolutions()
    // 显示 feedbackModal
    this.setData({
      feedbackModalVisible: true
    })
    setTimeout(() => {
      // 播放 feedbackPanel 动画 zoomIn
      this.feedbackPanelAnimation.opacity(1).scale3d(1, 1, 1).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })
      this.setData({
        feedbackPanelAnimationData: this.feedbackPanelAnimation.export()
      })
      // 缓存 quizSolved
      this.setData({
        quizSolved: 1
      })
      this.cacheQuizAsSolved()
      // 答题反馈
      setTimeout(() => {
        this.feedback()
      }, 2400)
    }, 400)
  },

  /**
   * 检查答案
   */

  checkMyAnswer: function () {
    new Promise((resolve, reject) => {
      const quiz = this.data.quiz
      if (quiz.quizType === 1) {
        if (this.data.myAnswerKey === quiz.answerKey) {
          this.setData({
            myAnswerFeedback: 1,
            feedbackTitle: FEEDBACK_TITLE_RIGHT
          })
        } else {
          this.setData({
            myAnswerFeedback: 0,
            feedbackTitle: FEEDBACK_TITLE_WRONG
          })
        }
        // 操作成功
        resolve()
      } else if (quiz.quizType === 2) {
        wx.createIntersectionObserver().relativeTo('.answer-area').relativeToViewport().observe('.my-answer-point', res => {
          console.debug(`相交区域占目标节点的比例：`, res.intersectionRatio)
          this.setData({
            myAnswerFeedback: 1,
            feedbackTitle: FEEDBACK_TITLE_RIGHT
          })
          // 操作成功
          resolve()
        })
      }
    }).then(() => {
      // 缓存 myAnswerFeedback
      const myAnswerFeedback = this.data.myAnswerFeedback
      this.cacheMyAnswerFeedback(myAnswerFeedback)
      // 缓存 quizUser
      if (myAnswerFeedback === 1) { // 如果回答正确
        const quizUser = this.data.quizUser
        quizUser.totalKeyCount++
        this.setData({
          quizUser: quizUser
        })
        QuizUser.set(quizUser)
        // 同步 quizUser
        this.syncQuizUser()
      }
    })
  },

  /**
   * 答题反馈
   */

  feedback() {
    new Promise((resolve, reject) => {
      // 播放 feedbackPanel 动画 zoomOut
      this.feedbackPanelAnimation.opacity(0).scale3d(0, 0, 0).step({
        duration: 200,
        timingFunction: 'ease-in-out'
      })
      this.setData({
        feedbackPanelAnimationData: this.feedbackPanelAnimation.export()
      })
      // 操作完成
      resolve()
    }).then(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // 隐藏 feedback
          this.setData({
            feedbackModalVisible: false
          })
          // 操作完成
          resolve()
        }, 400)
      }).then(() => {
        // 播放 actionBar 动画 fadeInUp
        this.actionBarAnimation.opacity(1).height(60).step({
          duration: 200,
          timingFunction: 'ease-in-out'
        })
        this.setData({
          actionBarAnimationData: this.actionBarAnimation.export()
        })
      })
    })
  },

  /**
   * 同步 quizUser
   */

  syncQuizUser: function (formId) {
    return new Promise((resolve, reject) => {
      // 启动信道服务
      const app = getApp()
      if (!app.tunnel || app.globalData.tunnelStatus === TunnelStatus.CLOSE) {
        console.debug(`启动信道服务...`)
        tunnelService.parse(this, getApp())
      }
      // 准备信道消息
      let content
      if (formId) {
        content = {
          quizUser: this.data.quizUser,
          quizUserForm: {
            quizUserId: this.data.quizUser.quizUserId,
            formId: formId,
            submitTime: dateUtils.formatTime(new Date())
          }
        }
      } else {
        content = {
          quizUser: this.data.quizUser
        }
      }
      // 发送信道消息
      app.tunnel.emit(TunnelEvent.SYNC_QUIZ_USER_REQ, content)
      console.debug(`emit a '${TunnelEvent.SYNC_QUIZ_USER_REQ}' message: `, content)
      // 操作成功
      resolve()
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
   * 初始化 optionAudioContext
   */

  initOptionAudioContext: function () {
    console.debug(`初始化 option 音效`)
    this.optionAudioContext = wx.createInnerAudioContext()
    this.optionAudioContext.src = '/assets/audios/ding.mp3'
    this.optionAudioContext.autoplay = false
    this.optionAudioContext.obeyMuteSwitch = false
    this.optionAudioContext.onPlay(() => {
      console.debug('option audio on play')
    })
    this.optionAudioContext.onPause(() => {
      console.debug('option audio on pause')
    })
    this.optionAudioContext.onStop(() => {
      console.debug('option audio on stop')
    })
    this.optionAudioContext.onEnded(() => {
      console.debug('option audio on ended')
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
   * 初始化各种动画
   */

  initAnimations: function () {
    console.debug(`初始化各种动画`)
    this.feedbackPanelAnimation = wx.createAnimation()
    this.actionBarAnimation = wx.createAnimation()
  },

  /**
   * 缓存 quizAsLoaded
   */

  cacheQuizAsLoaded: function () {
    console.debug(`缓存 quizAsLoaded`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizLoaded = this.data.quizLoaded
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizQuestionImageUrl = this.data.quiz.question.questionImage.url
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 timeElapsed
   */

  cacheTimeElapsed: function () {
    console.debug(`缓存 timeElapsed`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].timeElapsed = this.data.timeElapsed
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 myAnswerKey
   */

  cacheMyAnswerKey: function () {
    console.debug(`缓存 myAnswerKey`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].myAnswerKey = this.data.myAnswerKey
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 myAnswerPoint
   */

  cacheMyAnswerPoint: function () {
    console.debug(`缓存 myAnswerPoint`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].myAnswerPoint = this.data.myAnswerPoint
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 myAnswerFeedback
   */

  cacheMyAnswerFeedback: function (myAnswerFeedback) {
    console.debug(`缓存 myAnswerFeedback`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].myAnswerFeedback = myAnswerFeedback
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 缓存 quizSolved
   */

  cacheQuizAsSolved: function () {
    console.debug(`缓存 quizSolved`)
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCardIndex = this.getQuizCardIndexByQuizId(this.data.reqQuizId)
    const quizGrid = this.data.quizGrid
    quizGrid[quizTabIndex].quizCards[quizCardIndex].quizSolved = this.data.quizSolved
    this.setData({
      quizGrid: quizGrid
    })
    QuizGrid.set(quizGrid)
  },

  /**
   * 根据 quizId 获取 quizCardIndex
   */

  getQuizCardIndexByQuizId: function (quizId) {
    const remainder = quizId % quizGridBuilder.QUIZ_CARD_COUNT_PER_TAB
    return (remainder === 0) ? quizGridBuilder.QUIZ_CARD_COUNT_PER_TAB - 1 : remainder - 1
  }

})
