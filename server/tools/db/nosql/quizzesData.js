const QuizzesData = [
  {
    quizId: 1,
    quizType: 1,
    title: '莫尔夫人和离奇的鬼怪',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '莫尔夫人打电话给吉塔侦探，她害怕极了，颤抖着说：“我在10点55分走出厨房，看到有人披着白床单在走廊上，一眨眼就跑到门口，那人的头撞到了门，然后跑上楼梯消失了。我害怕极了，好一会儿才发现中大奖的彩票不见了！”吉塔侦探的心中很肯定，这个“鬼怪”一定在另外3位房客中。吉塔侦探分别询问他们，10点55分时他们在哪里？齐贝尔太太说：“我在铺床，然后开始做菜。”伯尔特先生说：“我去买东西了，刚回来。”纳塞尔先生说：“我今天睡过头了，很晚才起床，刚刚洗完澡从浴室出来！”这三个人中谁的说法是错误的，从而暴露了这个鬼鬼祟祟的偷窃之鬼？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/xfhywhen.jpg',
        height: 445
      }
    },
    options: {
      layout: 'row',
      optionsData: [
        {
          optionKey: 'A',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '齐贝尔太太'
            }
          ]
        },
        {
          optionKey: 'B',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '伯尔特先生'
            }
          ]
        },
        {
          optionKey: 'C',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '纳赛尔先生'
            }
          ]
        }
      ]
    },
    answerKey: 'C',
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '纳赛尔先生'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '纳赛尔先生是那个偷窃之鬼！如果他真的刚刚洗完澡从浴室出来，那么他的头发应该是湿的，他的浴衣内也不应该穿戴着衬衫和领带，此外他额头上的创可贴正表明了刚才他的头撞到了某处。'
          }
        ]
      }
    ]
  },
  {
    quizId: 2,
    quizType: 2,
    title: '令人垂涎的啤酒瓶盖收藏品',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '拍卖行勒策尔公司委托多琳·达克赛一项任务——将一批罕见珍贵的啤酒瓶盖收藏品送到火车站。她所乘坐的火车在10点整发车开往汉堡，她将在那里和一位有兴趣的买家碰头。卡勒侦探陪伴他的老朋友多琳前往火车站，多琳的前同事瓦洛·拉贝悄悄地跟踪他们。瓦洛十分熟悉多琳的业务，而且他本身就是啤酒瓶盖的狂热收藏家，无论如何都想把这批宝贵的藏品占为已有。当多琳将装有啤酒瓶盖的箱子放下，抬头查看自己的火车班次发车信息时，瓦洛迅速冲上去调换了皮箱，旋即消失在人流中。不过他没有想到，卡勒侦探也会同行！卡勒侦探一直看得清清楚楚，瓦洛是如何偷盗掉包收藏品的，也知道他现在正藏在何处，卡勒侦探就要采取行动了！你看出来了吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/b0sbp1cw.jpg',
        height: 990
      }
    },
    answerArea: { x: 260, y: 86 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '瓦洛用外观一模一样的箱子调换了多琳的箱子，他位于楼梯顶部，提着真正的箱子想要逃进小餐馆。'
          }
        ]
      }
    ]
  },
  {
    quizId: 3,
    quizType: 2,
    title: '银盘尾翼鹦鹉',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '鸟笼敞开着，笼内空空如也——韦拉·施纳贝尔发现自己心爱的银盘尾翼鹦鹉不见了，她能肯定这只罕见品种的虎皮鹦鹉被偷了。她立即怀疑看门人蒂诺·弗里德里希尔，因为前天他刚刚建议她将这只罕见的鹦鹉高价出售给花鸟市场！卡勒侦探答应施纳贝尔夫人去查看一下弗里德里希尔，但是后者不肯承认，并且大发牢骚：“在哪里？我没有偷施纳贝尔夫人的鸟，我受不了鸟。”但是卡勒侦探目光敏锐，发现了弗里德里希尔的房间里藏着一些东西，证明他有把鹦鹉藏起来的嫌疑，这样卡勒侦探便可以进行下一步的搜查。卡勒侦探发现了什么呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/5gjx6587.jpg',
        height: 950
      }
    },
    answerArea: { x: 94, y: 80 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '如果蒂诺·弗里德里希尔受不了鸟，那为什么在餐具台下方的橱柜内有一包鸟饲料？他肯定有偷了施纳贝尔夫人的鸟并想把它卖掉而大赚一笔的嫌疑。'
          }
        ]
      }
    ]
  },
  {
    quizId: 4,
    quizType: 2,
    title: '易容高手奥兰多',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '吉塔侦探坐公共汽车前往飞机场，在她前面几排的座位上坐着奥兰多·格里齐奥——一个十分精明的赝品钻石商人。吉塔侦探的任务就是秘密盯住他，并阻止他坐飞机离开本国。这个骗子不难辨认，因为他有一把引人注目的大胡子，还带着一个大行李包。在宽敞巨机场候机厅内，奥兰多走进了男厕所，随即消失了。不走运的吉塔！她恼火地站在柱子后面，等待他再次出现。可惜徒劳无功，奥兰多消失得无影无踪。这个骗子一定在僻静处“易容”变成了另一个人，逃脱了吉塔侦探的锐利视线，他正想方设法摆脱阻碍，离开这个国家！不过吉塔侦探并没有放弃，事实上，她的坚持得到了回报，她认出了那个骗子。她是怎样再次发现易容高手奥兰多的？他藏在哪里呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/dofilbre.jpg',
        height: 1000
      }
    },
    answerArea: { x: 18, y: 266 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '奥兰多十分狡猾地将自己打扮成阿拉伯人，他藏在报刊亭右侧的角落里，但是引入注目的行李泄露了他的行踪。'
          }
        ]
      }
    ]
  },
  {
    quizId: 5,
    quizType: 2,
    title: '保密的面条配方',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '著名的面食工厂麦克·阿罗尼公司要更新整个面条产品的配方目录。享有盛誉的面食大师推出了事前严格保密的“面条系列2000”，媒体和电视台都想方设法争取第一个报道这一全新系列产品。学徒齐波通过老板办公室的毛玻璃看到，目录草稿被悄悄地交给了一位陌生女士——她肯定是记者！齐波马上通知吉塔侦探自己发现的情况，与此同时，他必须在大街上盯着那位陌生女士，这样侦探们才能从她的手中拿到目录草稿。谁能帮助齐波在人群中找到这位女士？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gykm10pd.jpg',
        height: 980
      }
    },
    answerArea: { x: 48, y: 240 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '那位陌生的女士刚刚穿过马路，她的手臂夹着目录草稿的文件袋，就在图中被修剪的大树右侧。'
          }
        ]
      }
    ]
  },
  {
    quizId: 6,
    quizType: 2,
    title: '倒下的橡树',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '当文策尔·劳普林一大早从快乐的聚会回到家中时，他无法相信自己的眼睛：当他晚上不在家的时候，有人竟然把他院子里有着100年树龄的橡树砍倒了！劳普林马上想到了他的邻居阿克塞尔·考茨，这个家伙一直抱怨橡树的树荫！劳普林打电话给他的朋友卡勒侦探求助，6点30分的时候，他们已经站在阿克塞尔·考茨的家门前。劳普林愤怒地指责他的邻居，但是阿克塞尔坚决地驳斥他的责问：“我整个晚上也不在家，而是睡在我姐姐莉兹家。”他又怒气冲冲地说：“我5分钟之前刚刚回家，根本不可能砍掉你的橡树！”卡勒侦探早就注意到阿克塞尔是否说了真话，你呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/yzljhs7y.jpg',
        height: 940
      }
    },
    answerArea: { x: 260, y: 200 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '阿克塞尔在说谎，他并非整晚离开，而是睡在自己家里。因为他的床铺还尚未整理，很明显他刚要开始吃早饭。如果他真的5分钟之前刚刚到家，那他应该顺路将报纸和牛奶瓶拿进屋子。'
          }
        ]
      }
    ]
  },
  {
    quizId: 7,
    quizType: 2,
    title: '可恶的卡西莫多犯罪集团',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '卡勒侦探听到风声——臭名昭著的卡西莫多犯罪集团逗留在普福德海姆小镇，卡勒侦探早就知道卡西莫多三兄弟——拉基、尼基和泰迪。现在有关于他们最新犯罪计划的新线索，因为有人在鲨鱼酒馆看到拉基在喝热巧克力饮料。当卡勒侦探到达那里后，在现场发现了一些蛛丝马迹，从中可以知道骗子三人组接下来的计划是什么。三兄弟将在什么时候、在哪里作案呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/k2whoics.jpg',
        height: 463
      }
    },
    answerArea: { x: 200, y: 150 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '烟灰缸中撕碎的小纸片泄露了该犯罪集团接下来要大干一票的时间和地点，纸片上写着：“拉基，出发！星期六午夜普福德海姆储蓄银行，尼基！”'
          }
        ]
      }
    ]
  },
  {
    quizId: 8,
    quizType: 2,
    title: '货币兑换处',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '莫里茨·施拉格走进银行货币兑换处，在兑换窗口前，他小心翼翼地将一大叠美元推进玻璃窗口。“请兑换。”莫里茨心情愉悦地说。突然有人拍拍他的肩膀，那正是卡勒侦探！他礼貌地请莫里茨跟他去货币兑换处的主管办公室。为什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/q3v7176i.jpg',
        height: 1000
      }
    },
    answerArea: { x: 70, y: 330 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '莫里茨手中的钞票很明显是伪造的，在美元纸币上既印刷了数字3，又印刷了数字5。'
          }
        ]
      }
    ]
  },
  {
    quizId: 9,
    quizType: 2,
    title: '基佐隐匿',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '魔术师基佐是个骗子，他使用卑鄙的诡计从人们的口袋中骗取钱财。卡勒侦探已经跟踪他好几周了，但是基佐一直小心翼翼地不露痕迹。现在卡勒得到消息，基佐躲在自己的老同事卡罗·卡茨那里，终于可以找到基佐这个骗子了吗？卡罗·卡茨也是一个令人怀疑的怪人，长久以来他一直安静地居住在市郊的一所小房子里。当卡勒侦探上门拜访他并询问有关基佐的情况时，卡罗摸着自己锃亮的光头，不动声色地否认道：“只有我一个人住在这里，你自己冷静地查看一遍，伯纳！”',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/2qjhay5k.jpg',
        height: 980
      }
    },
    answerArea: { x: 246, y: 260 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '抽屉柜上的梳子还带着头发。既然卡罗是光头，他就不需要梳子，因此卡罗一定隐瞒了有人和他同住的信息，这个人只可能是人们搜寻的基佐。'
          }
        ]
      }
    ]
  },
  {
    quizId: 10,
    quizType: 2,
    title: '退出车赛',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '在伯肯赛道-格兰匹治大赛中，赛车风驰电掣地从赛道上呼啸而过。这项著名的赛事马上就要决出最后名次，而且怎么可能有其他结果呢？拉瑟·弗里茨再次遥遥领先。和其他选手一样，拉瑟的赛车在最后冲刺前必须进维修站，给油箱加油。拉瑟采用特别的混合汽油F98，他的赛车发动机只能用这种燃料。因为拉瑟怀疑有人要阻止他获得胜利，便请吉塔侦探监督他的维修站。事实上，吉塔侦探也的确观察到了一些情况，证实了拉瑟的怀疑！当他的赛车在加油时，她看到了假冒的工作人员想要给予车手致命打击，要让他退出比赛。那个假冒的工作人员要怎样做呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/emzuvmt8.jpg',
        height: 1000
      }
    },
    answerArea: { x: 248, y: 168 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '假冒的工作人员正准备用水代替混合汽油F98加入油箱。'
          }
        ]
      }
    ]
  },
  {
    quizId: 11,
    quizType: 2,
    title: '胡尔达·施洛特的化妆舞会',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '女市长胡尔达·施洛特在疗养院大厅举办盛大的化妆舞会，客人们都穿着最稀奇古怪的服装。突然一封匿名信和一张男性照片交到了胡尔达的手上，信中透露在奇装异服的客人中有一名可疑的“抽奖奖金盗窃专家”，据称，他将提前引燃原本在午夜燃放的焰火，造成巨大混乱，借机偷窃巨额的抽奖奖金。胡尔达立即叫来卡勒侦探，他冷静地混入客人中，希望找到这个不受欢迎的捣乱者。这应该不太困难，不是吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/imbhuyha.jpg',
        height: 970
      }
    },
    answerArea: { x: 160, y: 90 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '抽奖专家穿着水手服装，他站在带着太阳帽的女士和骑士之间，通过他的耳环可以认出他。'
          }
        ]
      }
    ]
  },
  {
    quizId: 12,
    quizType: 2,
    title: '苏门答腊蓝宝石',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '维尔弗里德·陶施拜因在他的珠宝商店内激动地走来走去，他结结巴巴地说：“苏门答腊蓝宝石，我最精美的宝石不见了！”吉塔侦探环顾商店。“请您按顺序描述一下整个过程。”她说。陶施拜因先生深深地吸了口气：“一切都发生得太快了。大约在17点15分左右，一位先生来到店里，他对苏门答腊蓝宝石很感兴趣，为了避免打搅，我们就到店后面的顾客室去了。这位先生仔细观察着这颗珍贵的宝石，突然他跳起来，拿起宝石就跑进店里，在那里他一脚把顾客室的门踢上关住，阻挡了我的追捕。他逃到了大街上，很快就混人密集的过路人群中，消失不见了。”吉塔侦探再次仔细地观察了一遍商店，接下来义向店主提出了一个问题：“这颗宝石是否上了保险?”当陶施拜因先生给予肯定的回答之后，她就确定，这是珠宝商导演的一场偷窃骗局，要借此骗取保险金在——在他的描述中，有一点不正确。是哪一点呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/utfsxusz.jpg',
        height: 970
      }
    },
    answerArea: { x: -10, y: 96 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '陶施拜因先生讲述的故事并不正确，他不能从店里用脚踢上顾客室的门，因为它是向内打开的。'
          }
        ]
      }
    ]
  },
  {
    quizId: 13,
    quizType: 2,
    title: '消失的宾馆住客',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '“当那个家伙在客人登记簿上签名模糊不清时，我就有不好的感觉。”阿本德鲁宾馆前台的女服务员生气地喃喃自语。前一天，有一位先生来到她的宾馆，要求入住最漂亮的房间，第二天一早他却消失得毫无痕迹——他没有支付住宿费！毫无痕迹？卡勒侦探持有不同的意见。观察一下这个骗子住过的房间，一切就清楚了，人们应该在何时何地将宾馆账单当面交给他呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/4udyh5m9.jpg',
        height: 400
      }
    },
    answerArea: { x: -10, y: 148 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '根据撕碎的电影宣传材料和桌上的便签纸，这位消失的住客今天晚上19:30将和一位卡米拉小姐在第一影院碰头，他们将一起观看20:00播放的电影“潜逃途中”。'
          }
        ]
      }
    ]
  },
  {
    quizId: 14,
    quizType: 2,
    title: '布鲁诺的服装不翼而飞',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '霍夫剧院里一片混乱！离演出开始只有3分钟了！矮胖敦实的男主角布鲁诺，双手湿漉漉地跑过化妆更衣室过道，他还穿着浴袍！通常在这个时候，布鲁诺应该早早穿好铁皮戏服，他在“0Z的魔术师”中扮演铁皮人。可是今天晚上他的戏服失踪了，而且现在根本没时间为布鲁诺准备新的戏服——尤其是必须适合他的矮胖身材！于是走投无路的剧院经理别无选择，只能启用布鲁诺的替补演员——身材修长的莱奥出演这个角色。令布鲁诺惊讶不已的是，莱奥已经早早穿好戏服，准备完毕了！“这太可疑了！”布鲁诺怒气冲冲地责骂，他不相信莱奥，并打电话给吉塔侦探，她在观众席里正要观看这次演出。是否有证据证明，莱奥在该事件背后做了手脚?',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/5jkqjy7k.jpg',
        height: 980
      }
    },
    answerArea: { x: 144, y: 270 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '莱奥将布鲁诺的铁皮服装偷出来并藏在自己的化妆更衣室里，这个替补演员希望最终有机会登台亮相。'
          }
        ]
      }
    ]
  },
  {
    quizId: 15,
    quizType: 1,
    title: '粉色玛格达勒娜',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '毛里提乌斯·蔡信最珍贵的邮票——粉色玛格达勒娜失踪了。也许是被盗了？！今天曾经有3个人来拜访他，肯定是他们中的某人从起居室里的集邮册中拿走了这枚邮票。卡勒侦探查看了3个人的陈述：奥托，白铁工，他在厨房里修理漏水的水龙头，没有进人其他房间。弗里德尔·施托尔，保险经纪人，他怒气冲冲地重新点燃一根雪茄并解释，他只是很快地送了一此保险文件过来，并把它们留在厨房的桌子上了。特鲁德·维施尔，家政服务员，像她与蔡信先生约定的那样，她每周四打扫房间，除了起居室。她根本不能进人那个房间，蔡信先生自己整理。卡勒侦探在起居室里发现了一个重要证物，清楚地驳斥了其中一个人的陈述。请仔细观察！小偷在起居室里留下了什么，从而证明了他的犯罪事实？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gk0xvhtu.jpg',
        height: 980
      }
    },
    options: {
      layout: 'row',
      optionsData: [
        {
          optionKey: 'A',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '奥托'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gk0xvhtu_a.jpg',
                width: 100,
                height: 100
              }
            }
          ]
        },
        {
          optionKey: 'B',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '特鲁德·维施尔'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gk0xvhtu_b.jpg',
                width: 100,
                height: 100
              }
            }
          ]
        },
        {
          optionKey: 'C',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '弗里德尔·施托尔'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gk0xvhtu_c.jpg',
                width: 100,
                height: 100
              }
            }
          ]
        }
      ]
    },
    answerKey: 'C',
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '弗里德尔·施托尔'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '卡勒侦探在蔡信先生起居室的沙发下面发现了雪茄烟蒂，只有保险经纪人弗里德尔·施托尔抽这类雪茄！因此他的证词是假的，就是他偷走了邮票。'
          }
        ]
      }
    ]
  },
  {
    quizId: 16,
    quizType: 1,
    title: '顺序混乱的照片',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '卡勒侦探正面对一个猜谜难题。有人交给他们一批新照片，照片上出现了默克·施带茨和他的小猴子露露、贵族的女儿纳蒂娜和她的爱人罗伊·施利克，但是这些照片的顺序乱作一团！卡勒侦探对默克很感兴趣，跟踪他很久了。当照片正确排序后，它们显示了他的作案经过！在此发生了什么？这些照片的正确排列顺序如何？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/36g80qto.jpg',
        height: 705
      }
    },
    options: {
      layout: 'row',
      optionsData: [
        {
          optionKey: 'A',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: 'I B H G D E F C A'
            }
          ]
        },
        {
          optionKey: 'B',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: 'D I B H G E F C A'
            }
          ]
        },
        {
          optionKey: 'C',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: 'B H G D E F C I A'
            }
          ]
        }
      ]
    },
    answerKey: 'B',
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '照片的正确排列顺序是 D I B H G E F C A。以下就是发生的一切：默克·施蒂茨和他的小猴子露露观察着(D),罗耶·施利克开车来到爱人纳蒂娜的门前(I)。进入房子后，默克·施蒂茨送给爱人一根珍贵的项链(B)，纳蒂娜非常开心(H)，两个人一起离开房间(G)。默克让他的小猴子爬上去(E)，拿到项链(F)并把它送到默克手中(C)。罗耶和纳蒂娜发现项链被偷，大惊失色(A)。'
          }
        ]
      }
    ]
  },
  {
    quizId: 17,
    quizType: 2,
    title: '被打搅的游轮之旅',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '吉塔侦探终于可以休假了！她参加了游轮旅行团，在甲板上安静地享受假期。突然，船上警钟长鸣。“甲板上有偷渡客！”船长大声宣布。水手和船上的工作人员在甲板上冲来冲去，搜寻偷渡客。因为船长知道吉塔侦探在船上，就请她帮忙。虽然吉塔侦探早就害怕在休假中可能发生太多意外，但她还是爽快地答应帮忙。偷渡者匆匆忙忙地从救生艇上逃出来，不过当吉塔侦探检查了救生艇之后， 她已经心知肚明，要找到他并不困难。他藏在哪里呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/86wqwnhm.jpg',
        height: 970
      }
    },
    answerArea: { x: 10, y: 50 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '偷渡客在匆忙逃跑中将一只鞋子留在了救生艇上，在游轮的顶层左边，有一个只穿着一只鞋子的人，他就是那个偷渡者。'
          }
        ]
      }
    ]
  },
  {
    quizId: 18,
    quizType: 2,
    title: '马可·波罗失踪了',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '米歇尔·德安吉罗是一位著名的艺术家、雕塑家。此时，他几乎无法相信：在宫殿公园中，他最喜欢的雕塑——骄傲地站立在底座上的马可·波罗像——消失了，地上散落着碎石和-把锤子。“哪个庸俗的家伙偷走了我的马可·波罗？”他破口大骂，怒气冲冲地让人打电话给吉塔侦探。看门人把吉塔侦探带到米歇尔面前，他还待在案发现场。在此期间，公园管理员毛罗听到喧哗声也赶了过来，他们在空空如也的底座前碰头。吉塔侦探仔细查看了现场，进行了询问，最后她对米歇尔说：“这两位工作人员中的某个人就是盗窃犯。”是什么暴露了作案人？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/vkbgz5f5.jpg',
        height: 980
      }
    },
    answerArea: { x: 160, y: 400 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '地面上石头中间的纽扣暴露了作案人，这颗纽扣来自看门人的制服，因此他就是盗窃犯。'
          }
        ]
      }
    ]
  },
  {
    quizId: 19,
    quizType: 2,
    title: '音乐家花园陶俑',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '乌多是花园陶俑博物馆的馆长，当他走过收藏品时，十分惊讶地发现“坐着的小提琴手”陶俑不在原来的位置上，它毫无迹象地消失了！乌多立即报告了这起偷窃案。“肯定是希尔达·齐普弗从中作梗！现在只有卡勒和吉塔侦探能帮忙。”馆长果断地决定。希尔达住在河边的花园小屋内，她同样十分喜欢花园陶俑，她一直试图向博物馆购买“坐着的小提琴手”陶俑，可惜总是达不成心愿。卡勒和吉塔侦探拜访了希尔达，并仔细在看了她的陶俑乐园。希尔达听到偷窃事件时惊慌失措，一再保证自己和这件事毫无瓜葛。卡勒和吉塔侦探能找到驳斥她的证据吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/a8jbc4rk.jpg',
        height: 975
      }
    },
    answerArea: { x: 30, y: 360 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '希尔达将偷窃的花园陶俑藏在自己的花园小屋里，就在地上的箱子里，紧挨着门口。'
          }
        ]
      }
    ]
  },
  {
    quizId: 20,
    quizType: 2,
    title: '神秘的化妆间拜访者',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '洛拉·舍恩是著名的歌手，也是利贝林赌场的特邀歌手。不过这位极其敏感的艺术家现在火冒三丈！在她登台演唱时，一定有人偷偷潜人了她的化妆更衣间。经理许茨勒马上将吉塔侦探请来弄清事实真相。吉塔侦探仔细倾听，洛拉说：“当我在上场前最后化妆时，我觉得有人在悄悄地窥视我的化妆间，但是我没有继续注意这些，现在我能肯定，有人曾经进人这里，肯定有些东西变了，他是不是偷了我的东西？吉塔侦探笑着说：“我相信，那个小偷是您的粉丝！”比较上下两张图片就能知道吉塔侦探如何得出上述答案。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/i86tsl8o.jpg',
        height: 1413
      }
    },
    answerArea: { x: 128, y: 28 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '那个透过锁眼偷窥并闯入化妆间的人仅仅偷走了一张洛拉的照片，这张照片粘在镜子的右上角，他一定是真正的歌迷。'
          }
        ]
      }
    ]
  },
  {
    quizId: 21,
    quizType: 2,
    title: '秘密通知',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '瓦尔多和菲蒙一起伪造支票骗取了一大笔钱财，他们在作案后分开行动，以免被抓获。菲蒙藏在他的祖母家里，瓦尔多把装钱的袋子放在安全的隐秘处后，他也消失了。根据事先的约定，不久后，菲蒙从瓦尔多那里得到了一张密码纸条，可是，紧接着菲蒙就被警察抓获，他携带的密码纸条也被发现了，因为警察对于复杂的符号束手无策，于是请来卡勒和吉塔侦探协助破案。只要破解这个通知的密码，就能知道他们在哪里寻找那笔钱款了！最终他们找到了线索，破解了密码，先到一步取到了那笔钱款。（后续消息瓦尔多不久前也在他的外祖母处被捕。）',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/0zm0znun.jpg',
        height: 980
      }
    },
    answerArea: { x: 82, y: 24 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '通知上写着：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '“钱袋在拉本察恩承包的烟囱后面 瓦尔多”'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '钱袋藏在左侧上方第二个烟囱后面'
          }
        ]
      }
    ]
  },
  {
    quizId: 22,
    quizType: 2,
    title: '突然死亡的玛格丽塔雏菊',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '罗莎·格林斯最大的梦想即将成真：经过无数次的尝试后，她终于幸运地成功种植了一棵玛格丽塔雏菊。玛格丽塔雏菊是一种特别需要阳光的植物，黑暗对它而言就意味着死亡，因此它必须放在花园暖房的最上层，就在玻璃屋顶的下方。几周来，罗莎和她的雇工里塔·平克以及阿尔多·施特雷克共同照顾这棵罕见的植物。明天，她将在盛大的植物种植者大会上展出这株珍贵的花朵。但是今天晚上，她遭遇了致命打击！在花架的最下方，她的玛格丽塔锥菊在黑暗中枯萎了，耷拉着倒了下来，就在蕨类植物和仙人掌之间。罗莎意识到，有人要阻止她出席种植者大会，于是她马上向卡勒侦探报案！只有里塔和阿尔多有花园暖房的钥匙，于是卡勒侦探把两个雇员叫到面前询问，这里是他们的陈述：阿尔多声明他已经很久没去暖房了。里塔说他昨天一整天都在办公室里度过。但是卡勒侦探凭借敏锐的观察，立即告诉罗莎谁说谎了。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/svau38xj.jpg',
        height: 980
      }
    },
    answerArea: { x: 30, y: 290 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '里塔·平克的工作袍上有许多仙人掌刺，在办公室里不可能沾到这些刺，只有在暖房里才能沾到。里塔在黑暗中必须弯腰越过仙人掌才能将玛格丽塔雏菊放到花架的最下面一层。'
          }
        ]
      }
    ]
  },
  {
    quizId: 23,
    quizType: 2,
    title: '米基·库尔的踪迹',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '几周以来，卡勒侦探一直在跟踪保险箱撬窃者米基·库尔。在从侦探社回家的路上，他在地铁站西出口和这个嫌疑人擦肩而过，一眨眼米基就消失在人群中。卡勒侦探试着找到米基的踪迹，并跟踪个可能是米基的男子，但是卡勒侦探并不能肯定，一切都发生得太快了。最后，卡勒侦探拐进了一个昏暗的工厂区，因为他确信看到米基在这里不见了。在一家还有灯光的老锻造工厂里，卡勒侦探终于发现了一样东西，证明他追踪了正确的线索，米基的确藏在这里。卡勒侦探发现了什么呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/ztye1s4u.jpg',
        height: 1350
      }
    },
    answerArea: { x: 234, y: 568 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '米基·库尔的工具箱在老锻造工场里，上面还有他的名字的首字母缩写MC，卡勒侦探在地铁站就看到了这个保险箱撬窃者提着工具箱匆匆走过。'
          }
        ]
      }
    ]
  },
  {
    quizId: 24,
    quizType: 2,
    title: '普法芬堡将军失踪记',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '“我的‘普法芬堡将军’被偷了！”冯·科尔肯施泰因男爵夫人在庄园中惊慌失措地大叫。“普法芬堡将军”是一幅名画，许多艺术爱好者都想将它据为已有。吉塔侦探能破解这次偷盗案件吗？男爵的别墅中有许多犯罪嫌疑人：女佣厨师、司机、烟囱清扫工人园丁，甚至可能是男爵或者男爵夫人自导自演了一场骗局？吉塔侦探首先仔细观察了四周，这是正确的决定！她很快发现了线索，现在她已经知道准偷了名画“普法芬保将军”。那个人是谁呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/142496kj.jpg',
        height: 433
      }
    },
    answerArea: { x: -18, y: 130 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '司机已经把名画“普法芬堡将军”藏在汽车行李箱里，一位艺术爱好者委托他偷窃这幅画，他正要把它带给那位委托人。'
          }
        ]
      }
    ]
  },
  {
    quizId: 25,
    quizType: 2,
    title: '图弗特尔的最新发明',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '蒂诺·图弗特尔在他的实验室中发明了重要产品：一种保证有效的生发剂！就在同一天晚上，他邀请了一些同事来实验室，向他们展示自己的发明成果。偏偏就在他介绍自己的发明时突发短路停电事故，整个实验室一下子陷人黑暗。还好图弗特尔很快就排除了故障，灯又亮起来了。可是，他发现在一片黑暗混乱中自己记录在笔记本上的生发剂分子式已经被撕掉了。这让他目瞪口呆！肯定是现场的某人拿走了这张纸片，将这个成功的配方占为已有。不过这个小偷很倒霉——因为图弗特尔也邀请了他的朋友卡勒侦探，他只要稍稍观察一下，就可以知道是谁偷走了分子式。你们也行吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/93b1pf7y.jpg',
        height: 980
      }
    },
    answerArea: { x: 200, y: 170 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '卡勒侦探不需要花费很长时间寻找，图中最右侧的那位女士偷了带有机密分子式的纸片，就夹在她胳膊下方的文件资料里。'
          }
        ]
      }
    ]
  },
  {
    quizId: 26,
    quizType: 1,
    title: '照片谜题',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '“啊，真讨厌！”吉塔侦探大叫，她竟然把当前的通缉犯照片给撕碎了，太糟糕了。她只想清理些旧文件，让自己在堆积如山的资料中喘口气。“别惊讶，这里一团糟。”她咕哝道。她撕碎了3张照片，其中之一是路齐的照片，他可是一个坏家伙，明天晚上，吉塔侦探要根据照片在大型会议上找到他的踪迹。现在除了把这此碎片再次拼成完整的照片外，没有别的办法了。幸运的是，她还有一张路齐的模拟图像。路齐的识别编号是多少?',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/zst7dcmj.jpg',
        height: 1430
      }
    },
    options: {
      layout: 'row',
      optionsData: [
        {
          optionKey: 'A',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '479901'
            }
          ]
        },
        {
          optionKey: 'B',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '367315'
            }
          ]
        },
        {
          optionKey: 'C',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '723927'
            }
          ]
        },
        {
          optionKey: 'D',
          optionData: [
            {
              blockId: '1',
              blockType: 'normal-text',
              text: '367927'
            }
          ]
        }
      ]
    },
    answerKey: 'A',
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '路齐的识别编号是：479901'
          }
        ]
      }
    ]
  },
  {
    quizId: 27,
    quizType: 2,
    title: '并非人人都是幸运儿',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '齐勒塔尔家庭宠物展览会的大奖已经颁布，多莉·明斯克和她的可爱小猪仔平基成为幸运的胜利者！多莉高兴得忘乎所以，可是当她要抱起平基时，她大叫声小猪平基不见了。多莉四处寻找，可是小猪毫无踪迹。正巧卡勒侦探带着他会跳舞的中国小老鼠也参加了这次展览，当然立即到位侦查。“一定有人偷走了平基，小猪对我很忠诚，不会自己跑开的。”多莉抱怨道。她的推测正确吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/2ycyph4s.jpg',
        height: 960
      }
    },
    answerArea: { x: 250, y: 290 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '多莉的推测十分正确！小偷把平基藏在一个单肩包里，他在图画的最右边，和多莉的展示台在同一排。'
          }
        ]
      }
    ]
  },
  {
    quizId: 28,
    quizType: 2,
    title: '寻找咖啡杯小偷',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '吉塔侦探拜访了策伯尔·格拉茨克，她向他询向了一些有关上个周日咖啡杯被盗的情况，策伯尔在她的嫌疑人名单中，并且他的作案可能性最大。不过，策伯尔吸了一口烟，笑着说：“我什么都不知道，它们怎么会在我这里，证据在哪里？”吉塔侦探出去了一下，取来了放在摩托车行李盒内的包和放大镜。当她回来时，她发出会心的微笑。虽然策伯尔还是懒洋洋地坐在那里，仿佛没有离开过位置，一直在沉思，但是吉塔侦探敏锐的眼睛立即发现了策伯尔把什么东西藏了起来，极有可能就是周日被偷的咖啡杯。当吉塔侦探出去的时候，发生了什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/i3hqx5ny.jpg',
        height: 1319
      }
    },
    answerArea: { x: 220, y: 548 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '当吉塔侦探出去时，策伯尔·格拉茨克拿走了架子上的黑色皮包。当吉塔侦探回来时，钥匙板上少了一把钥匙，现在这把钥匙正插在工作桌下的柜子上，策伯尔把偷来的咖啡杯和皮包一起藏进柜子里了。'
          }
        ]
      }
    ]
  },
  {
    quizId: 29,
    quizType: 2,
    title: '午夜牌局',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '在会员制的洛丽塔酒吧内，四个扑克爱好者决定在深夜玩局牌，他们分别是：可疑的花花公子罗茨·弗拉林、酒吧女招待诺尔玛·劳斯、酒吧老板比尔·佩克和正在出差的商人萨姆·莫克。一切都在酒吧的私人内室中进行，通常这样的牌局赌注很大，但是这局牌早就有了结果，其中三家肯定是输家。如果卡勒或者吉塔侦探在现场，他们一定能提醒那三个输家，他们要注意什么呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/exliniux.jpg',
        height: 970
      }
    },
    answerArea: { x: 160, y: 270 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '这次牌局的赢家显而易见是萨姆·莫克，这个诡计多端的诈赌纸牌老千手里还拿着两张A，而桌上已经出了三张A，众所周知，一副牌里只有四张A。'
          }
        ]
      }
    ]
  },
  {
    quizId: 30,
    quizType: 2,
    title: '艺术品背后的诡计',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '可疑的艺术品商人里克·洪德尔紧张地捋着头发，他向卡勒和吉塔侦探小声抱怨道：“我也是第一次知道，这幅版画是赝品。”里克正要把艺术版画“偷吃甜食的小姑娘”卖给艺术品收藏家施蒂希莱恩。他说，这幅版画是一位16世纪著名版画家的唯一的存世之作，价值连城。不过，施蒂希莱恩立即打电话给卡勒和吉塔侦探，因为他知道这幅版画只是副廉价的赝品。吉塔和卡勒侦探也立刻看出来，里克想要欺骗施蒂希莱恩。是什么让施蒂希莱恩产生了怀疑呢，你能在这幅版画中找到答案吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/c61a4cde.jpg',
        height: 980
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '可惜这幅版画是一件伪劣赝品，因为16世纪不可能出现电话。'
          }
        ]
      }
    ]
  },
  {
    quizId: 31,
    quizType: 2,
    title: '鞋店中的交接',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '吉塔侦探希望将诡计多端的问谍005当场抓获，她获悉005将和接头人X在一家鞋店里传递一卷秘密微型胶卷，整个交接过程如下：X走进索尔·沃尔鞋店，他试穿了许多双鞋子，很快店里就乱作一团。他趁人不注意的时候悄悄地把微型胶卷藏到一只鞋子内，将另一只鞋子塞入大衣内。最后他买了一双拖鞋并离开商店。在鞋店老板将许多鞋子排放整齐之前，005来到店内，他让老板展示了几双凉鞋，现在他只需要找到那个单只的鞋子，就可以拿走其中的胶卷。吉塔侦探还在等待，直到005将这个重要物品拿到手中，才出面将他抓获。那么，这卷胶卷藏在哪只鞋子中呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/togv925t.jpg',
        height: 435
      }
    },
    answerArea: { x: 170, y: 90 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '藏着微型胶卷的单只鞋子在售货员头部左侧，就在他的耳朵上方。'
          }
        ]
      }
    ]
  },
  {
    quizId: 32,
    quizType: 2,
    title: '高大的陌生人',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '鲁迪·舍比希是个特别的罪犯，从事十分可疑的业务，几年前卡勒侦探就认识他，而且知道鲁迪不是一个人犯案，他有一个身材高大的同伙。现在卡勒侦探很想知道那个高大的陌生人是谁，住在哪里。没有比今天更好的机会了！他看到鲁迪走进邮局给他的同伙寄了个小包裹。邮局的工作一结束，卡勒侦探马上就进去检查今天收到的包裹。用这个办法，他终于找到了那个高大陌生人的名字和住址。你能找到吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/plmd2eoo.jpg',
        height: 1390
      }
    },
    answerArea: { x: 98, y: 320 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '卡勒寻找的包裹在架子当中一层，就在门的左边，这个高大的陌生人名字和地址是：阿德尔贝特·弗洛 罗辛恩路4号'
          }
        ]
      }
    ]
  },
  {
    quizId: 33,
    quizType: 1,
    title: '甜蜜的诱惑',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '楚克迈尔面包房的特色甜点就是“克拉赫堡美味小蛋糕”，人们常常在店外排起长队等待面包房开门。楚克迈尔刚要打开店门让顾客进来，突然他发现所有的小蛋糕都不见了。这一切肯定是在楚克迈尔出去打电话的5分钟内发生的，当时店里只有会计佩拉、售货员维尔玛和送货伙计多纳尔德。吉塔侦探也在外面排队，要替侦探社买一份克拉赫堡美味小蛋糕，她很快就知道了谁是那个爱吃甜食的人，那个家伙想要饱餐一顿。谁是那个甜食爱好者呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '面粉上的鞋印暴露了小偷，毫无疑问那是体操鞋鞋印，只有送货伙计多纳尔德穿这种鞋子。'
          }
        ]
      }
    ]
  },
  {
    quizId: 34,
    quizType: 2,
    title: '舒蒙尔先生不老实',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '卡勒侦探要飞到纽约探望姑姑，他来到机场的出入境护照检查处排队，正好在罗尔贝特·舒蒙尔先生身后，舒蒙尔也要去纽约。边检官员检查他的护照，心生怀疑，对他说：“嗯，舒蒙尔先生，您是不是把我当做傻瓜看待？很明显，你的护照是伪造的。舒蒙尔强烈抗议。不过，卡勒侦探越过边检官员的肩膀仔细观察护照，一下子就笑了，他一眼就看出来，这本护照的确是伪造的。为什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/afse8tpj.jpg',
        height: 1000
      }
    },
    answerArea: { x: 190, y: 420 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '罗尔贝特·舒蒙尔护照上的出生日期是2月30日，但是根本不存在2月30日。'
          }
        ]
      }
    ]
  },
  {
    quizId: 35,
    quizType: 2,
    title: '足球赛场中的双胞胎逃犯',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '双胞胎兄弟维利和比利，从头到脚都长得一模样。这两年他们都在米尔贝格尔监狱服刑，但是最近，他们再次成功越狱。他们逃往城市北部，卡勒侦探已经紧紧盯着他们，不过一个突发事件却有助于两兄弟逃跑。在巨大的体育场内，足球比赛开始了，几千名观众涌入体育场就座，维利和比利也乔装打扮混在人群中入场坐在看台上，当然他们没有坐在一起。对于卡勒侦探而言，在拥挤的人群中发现两兄弟很不容易，不过很幸运他有一双敏锐的眼睛。你发现那两兄弟了吗？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/64c39z3b.jpg',
        height: 990
      }
    },
    answerArea: { x: 184, y: 318 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '维利坐在下方第一排，在冰激凌小贩左上方。比利坐在图片的左上角，在一位络腮胡子先生后面。这对双胞胎长得实在太像了，也许是，比利在下方第一排，而维利则在左上方？'
          }
        ]
      }
    ]
  },
  {
    quizId: 36,
    quizType: 2,
    title: '仔细观察指印',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '金匠冯克尔先生大惊失色，昨晚电影女主角贝蒂·布卢放在他店里的项链不见了，他刚刚在这根价值连城的项链上镶了一颗新钻石。不过，吉塔侦探已经用放大镜仔细观察了这一切，她安慰这位金匠：“在展示柜玻璃上有一个清晰的指纹，这就够了。”她带了一套可能性最大的犯罪嫌疑人指纹索引卡片在手边，现在只需要比较一下就可以了。很快，吉塔侦探脸上露出了微笑，她知道该去找谁了。罪犯是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '吉塔侦探一定发现了那是迈克斯·克维尔的指纹。'
          }
        ]
      }
    ]
  },
  {
    quizId: 37,
    quizType: 2,
    title: '普福尔茨劳小姐',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '自从内拉·莫普斯在“普福尔茨劳小姐”选美比赛中获胜后，晚上她常常听到自己的楼梯上有脚步声。她对吉塔侦探说，有人在黑暗中偷偷潜人她的房子，她怀疑那就是玛丽·茨维利希——选美比赛第二名获得者，她一直想要获得内拉的减肥品！吉塔侦探看了一眼内拉的楼梯，随后就去拜访玛丽。不过，玛丽对这项指控大发雷霆：“我从没去过内拉的房子。她到底住在哪里？”然而，吉塔侦探已经看到充足的证据，为什么她能确定内拉的怀疑是正确的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '吉塔侦探在内拉的楼上发现了一只手套，另一只配套的手套则出现在玛丽·茨维利希的房间内，就在电视机下方的储物架上，因此玛丽肯定偷偷潜入过内拉的房子。'
          }
        ]
      }
    ]
  },
  {
    quizId: 38,
    quizType: 2,
    title: '鲨鱼蛾',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '本特弗吕格尔教授拥有一座最著名的活蝴蝶收藏花园。几天来，他一直在等待来自澳大利亚的邮件，今天他终于收到了装着12只极其珍稀蝴蝶的包裹。然而，当这位著名的研究学者检查收到的包裹时，他十分震惊——容器里蝴蝶的数量不是12只，而是13只！作为专家，他立刻意识到多出来的那只蝴蝶是非常危险的鲨鱼蛾，它可能在最短的时间内将容器内的其他蝴蝶都吃掉，肯定有人将它藏在容器内走私进来，想要破坏教授的收藏品。这时，正巧卡勒侦探进来寻找证据，还好教授收到的单子上有订购的蝴蝶照片。那只鲨鱼蛾藏在哪里呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '这只鲨鱼蛾就在右上角飞舞，你找到了吗？'
          }
        ]
      }
    ]
  },
  {
    quizId: 39,
    quizType: 2,
    title: '匿名纸条',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '维多伯爵在他书房的会客桌上发现一张匿名纸条，有人用狡诈的手段勒索他的金戒指。这枚金戒指是一件价值连城的珍贵遗产，是伯爵十分心爱的物品。吉塔侦探仔细阅读了小纸条，除了伯爵和他的仆人们，其他人都没有进入过书房，因此这张勒索纸条一定来自于管家、花匠或者厨娘中的某一人。当他们3个人在工作时，吉塔侦探分别拜访了他们，很快她就发现了谁在觊觎维多的金戒指。那个人是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    answerArea: { x: 196, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '吉塔侦探立刻看到，厨娘每日菜单计划上的单词星期一的一字写得很长，与勒索纸条上的“——”字一样，就是厨娘觊觎伯爵的机制。'
          }
        ]
      }
    ]
  },
  {
    quizId: 40,
    quizType: 2,
    title: '美味的火腿',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '星期五傍晚18点整，卡勒侦探辛勤工作了一周，正要关上侦探社的大门准备回家，此时他听到楼梯上传来绍尔利希太太以及她的邻居保利·斯佩克的声音，他们正在激烈地讨论考斯特林美食店的送货员。绍尔利希太太周一在美食店订购了一个肥美的火腿，但是快到傍晚的时候依然没有送货上门，因此，她向考斯特林美食店投诉说她一直没有收到火腿。考斯特林的送货员为此匆匆地赶过来，但是他坚称上午就曾送货上门，不过当时绍尔利希太太不在家，于是他就把火腿交给了她的邻居保利·斯佩克，让他代收。保利怒气冲冲地反驳说，他既没见到送货员，也没看到什么火腿。他一整天都在霍夫布罗伊赛马比赛现场。卡勒侦探仔细倾听他们的谈话，很快就知道了谁在说谎，并想把美味的火腿据为已有，他发现了什么线索呢？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/btrisd3r.jpg',
        height: 960
      }
    },
    answerArea: { x: 216, y: 140 },
    solutions: [
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '保利·斯佩克在说谎，根据背景广告栏上的宣传广告，霍夫布罗伊赛马比赛在6月19日星期六举行，而今天是6月18日星期五，他把火腿占为己有了。'
          }
        ]
      }
    ]
  },
  {
    quizId: 41,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 42,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 43,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 44,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 45,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 46,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 47,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 48,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 49,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 50,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 51,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 52,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 53,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 54,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 55,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 56,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 57,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 58,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 59,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 60,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 61,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 62,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 63,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 64,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 65,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 66,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 67,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 68,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 69,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 70,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 71,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 72,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 73,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 74,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 75,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 76,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 77,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 78,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 79,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 80,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 81,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 82,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 83,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 84,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 85,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 86,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 87,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 88,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 89,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 90,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 91,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 92,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 93,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 94,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 95,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 96,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 97,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 98,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 99,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 100,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 101,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 102,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 103,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 104,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 105,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 106,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 107,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 108,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 109,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 110,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 111,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 112,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 113,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 114,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 115,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 116,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 117,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 118,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 119,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 120,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 121,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 122,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 123,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 124,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 125,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 126,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 127,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 128,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 129,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 130,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 131,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 132,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 133,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 134,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 135,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 136,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 137,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 138,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 139,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 140,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 141,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 142,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 143,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 144,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 145,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 146,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 147,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 148,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 149,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 150,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 151,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 152,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 153,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 154,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 155,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 156,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 157,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 158,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 159,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 160,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 161,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 162,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 163,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 164,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 165,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 166,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 167,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 168,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 169,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 170,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 171,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 172,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 173,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 174,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 175,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 176,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 177,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 178,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 179,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 180,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 181,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 182,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 183,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 184,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 185,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 186,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 187,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 188,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 189,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 190,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 191,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 192,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 193,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 194,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 195,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 196,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 197,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 198,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 199,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 200,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 201,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 202,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 203,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 204,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 205,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 206,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 207,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 208,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 209,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 210,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 211,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 212,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 213,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 214,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 215,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 216,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 217,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 218,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 219,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 220,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 221,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 222,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 223,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 224,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 225,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 226,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 227,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 228,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 229,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 230,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 231,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 232,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 233,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 234,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 235,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 236,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 237,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 238,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 239,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 240,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 241,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 242,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 243,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 244,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 245,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 246,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 247,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 248,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 249,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 250,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 251,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 252,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 253,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 254,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 255,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 256,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 257,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 258,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 259,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 260,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 261,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 262,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 263,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 264,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 265,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 266,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 267,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 268,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 269,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 270,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 271,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 272,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 273,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 274,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 275,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 276,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 277,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 278,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 279,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 280,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 281,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 282,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 283,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 284,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 285,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 286,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 287,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 288,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 289,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 290,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 291,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 292,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 293,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 294,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 295,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 296,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 297,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 298,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 299,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 300,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 301,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 302,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 303,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 304,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 305,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 306,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 307,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 308,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 309,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 310,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 311,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 312,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 313,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 314,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 315,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 316,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 317,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 318,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 319,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 320,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 321,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 322,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 323,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 324,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 325,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 326,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 327,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 328,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 329,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 330,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 331,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 332,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 333,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 334,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 335,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 336,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 337,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 338,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 339,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 340,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 341,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 342,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 343,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 344,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 345,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 346,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 347,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 348,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 349,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 350,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 351,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 352,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 353,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 354,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 355,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 356,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 357,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 358,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 359,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 360,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 361,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 362,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 363,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 364,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 365,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 366,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 367,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 368,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 369,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 370,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 371,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 372,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 373,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 374,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 375,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 376,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 377,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 378,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 379,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 380,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 381,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 382,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 383,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 384,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 385,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 386,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 387,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 388,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 389,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 390,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 391,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 392,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 393,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 394,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 395,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 396,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 397,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 398,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 399,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 400,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 401,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 402,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 403,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 404,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 405,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 406,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 407,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 408,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 409,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 410,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 411,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 412,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 413,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 414,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 415,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 416,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 417,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 418,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 419,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 420,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 421,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 422,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 423,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 424,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 425,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 426,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 427,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 428,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 429,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 430,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 431,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 432,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 433,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 434,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 435,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 436,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 437,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 438,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 439,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 440,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 441,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 442,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 443,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 444,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 445,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 446,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 447,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 448,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 449,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 450,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 451,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 452,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 453,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 454,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 455,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 456,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 457,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 458,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 459,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 460,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 461,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 462,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 463,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 464,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 465,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 466,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 467,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 468,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 469,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 470,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 471,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 472,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 473,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 474,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 475,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 476,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 477,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 478,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 479,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 480,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 481,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 482,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 483,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 484,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 485,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 486,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 487,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 488,
    title: '谁更有可能是凶手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中哪一位餐厅顾客更有可能是凶手？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '3 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
          }
        ]
      }
    ]
  },
  {
    quizId: 489,
    title: '谁是走私集团幕后老板？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '美国警方正在调查一起石油走私案，将走私集团幕后老板锁定在了 Bill、John、Todd 三个人当中。在最后一次突击其窝点的时候，警方找到了卧底留下来的密码便签纸。请你破解其中隐藏的关键信息并指认幕后老板可能是谁。',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'BILL'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，辨认 BILL IS BOSS HE SELLS OIL 字样'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 490,
    title: '犯罪嫌疑人到达现场的先后顺序是什么？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '警方在某犯罪现场发现了 6 名犯罪嫌疑人的脚印，请问嫌疑人到达现场的先后顺序是什么？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
              height: 285
            }
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '先踩上去的脚印会被后踩上去的脚印覆盖'
          }
        ]
      }
    ]
  },
  {
    quizId: 491,
    title: '哪一发子弹最先击中墙体？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问哪一发子弹最先击中墙体？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
          }
        ]
      }
    ]
  },
  {
    quizId: 492,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '从楼梯上摔下应该是面朝下，而不是面朝上'
          }
        ]
      }
    ]
  },
  {
    quizId: 493,
    title: '汽车停在几号车位？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的汽车停在几号车位？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '87 号'
          }
        ]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请将图片上下翻转，车位编号依次是 86 87 88 89 90 91'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/qeh6c2nh.jpg',
              height: 378
            }
          }
        ]
      }
    ]
  },
  {
    quizId: 494,
    title: '自杀还是谋杀？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问下图中的死者可能死于自杀还是谋杀？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '谋杀'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '该名死者可能死于谋杀，原因如下：'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'normal-text',
            text: '1. 房间中有多处搏斗的痕迹'
          },
          {
            blockId: '4',
            blockType: 'return'
          },
          {
            blockId: '5',
            blockType: 'normal-text',
            text: '2. 死者似乎惯用左手，而致命伤和枪支却在右侧'
          },
          {
            blockId: '6',
            blockType: 'return'
          },
          {
            blockId: '7',
            blockType: 'normal-text',
            text: '3. 犯罪嫌疑人可能是窗外的逃逸者'
          }
        ]
      }
    ]
  },
  {
    quizId: 495,
    title: '谁先成功潜入的？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '某日，科技间谍 A 和 B 先后翻窗潜入某科研机构，企图窃取重要科研成果。请问第一个成功潜入的是 A 还是 B ？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: 'A'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '注意树叶的数量'
          }
        ]
      }
    ]
  },
  {
    quizId: 496,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '小明是一名动漫宅，某日在家中遇害。警方在书架上发现了他在临终前留下的不规则血迹，推断这可能是凶手线索。警方随后找到了四名犯罪嫌疑人，分别叫小丽、小园、小英、小娜，她们都是小明的好友。请问凶手可能是谁？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '小园'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请根据血迹辨认：杀死我的人名小园'
          }
        ]
      }
    ]
  },
  {
    quizId: 497,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下一秒，谁最有可能遇到危险？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '2 号的危险没有被其他人的目光观察到'
          }
        ]
      }
    ]
  },
  {
    quizId: 498,
    title: '哪一侧是镜子中的影像？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '下图是某天早上小英在北京家里拍摄的照片。其中有一侧是镜子中的影像，请问是哪一侧？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '右侧'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '请观察闹钟，早上五点钟的太阳尚未升起'
          }
        ]
      }
    ]
  },
  {
    quizId: 499,
    title: '今晚几楼的女士出轨了？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '请问今晚几楼的女士出轨了？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '三楼'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
          }
        ]
      }
    ]
  },
  {
    quizId: 500,
    title: '',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionText: '一名男子某次出差回家，给他的妻子拍摄了一张照片。事隔不久便提出了离婚，理由是从照片中发现了妻子出轨。请问他是如何发现的？',
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    solutions: [
      {
        solutionTag: '答案',
        align: 'center',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '仔细观察照片'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [
          {
            blockId: '1',
            blockType: 'normal-text',
            text: '在床头柜与床垫之间的缝隙里，可以看到有男人藏在里面'
          },
          {
            blockId: '2',
            blockType: 'return'
          },
          {
            blockId: '3',
            blockType: 'image',
            image: {
              url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/vxitgyyq.jpg',
              height: 590
            }
          }
        ]
      }
    ]
  }
]

module.exports = QuizzesData