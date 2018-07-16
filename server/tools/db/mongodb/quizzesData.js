const QuizzesData = [{
    quizId: 1,
    quizType: 1,
    stars: [1, 0, 0, 0, 0],
    title: '白色的幽灵',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/f0d3707x.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '李阿姨颤抖着告诉警方，刚刚好像有个白色的幽灵从她家客厅里一闪而过。她壮着胆子去客厅里检查，没有找到幽灵却发现中奖的彩票消失不见了！'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '警方怀疑有可能是李阿姨的邻居为了偷她的彩票而故意弄的障眼法，于是紧急传讯了三名犯罪嫌疑人并询问他们刚刚在做什么。张太太说自己在炒菜做饭。范先生说自己出去买东西了。邵先生说自己刚从浴室里洗完澡出来。'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '这三个人之中谁在说谎？请从图片下方的三个选项中，选出正确答案。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/xfhywhen.jpg',
        height: 450
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '张太太'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '范先生'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '邵先生'
          }]
        }
      ]
    },
    answerKey: 'C',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'C. 邵先生'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '邵先生在说谎。如果他真的刚从浴室里洗完澡出来，那么头发应该是湿的，更不应该在浴袍里面还穿着衬衫、打着领带。'
          }
        ]
      }
    ]
  },
  {
    quizId: 2,
    quizType: 1,
    stars: [1, 1, 1, 0, 0],
    title: '疯狂的黒女王邮票',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '陈平先生珍藏多年的黒女王邮票被人偷走了！他认真回忆了一下，确定今天只有三个外人分别来过家里。应该是他们之中有人从书房的集邮册里拿走了这枚邮票。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '李冰是一名维修工，他说自己一整天都在厨房修理水龙头，没有进过其他房间。杨阳是一名保险推销员，他说自己是来送保险文件的，把文件放到客厅桌子上就离开了。王萍是一名保洁阿姨，她每周都来家里打扫卫生，但是书房一直都是由陈平先生亲自收拾的，不需要她帮忙。'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '在陈平先生的书房里有一个重要证物，可以确定这三个人之中到底是谁在说谎。请从图片下方的三个选项中，选出正确答案。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gk0xvhtu.jpg',
        height: 980
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '李冰'
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
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '杨阳'
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
        },
        {
          optionKey: 'C',
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '王萍'
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
        }
      ]
    },
    answerKey: 'B',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'B. 杨阳'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '13',
          blockType: 'tab'
        }, {
          blockId: '1',
          blockType: 'normal-text',
          text: '陈平先生书房的沙发底下有一个烟头。三名嫌疑人之中只有保险推销员杨阳抽烟。所以他肯定进过书房，是他在说谎。'
        }]
      }
    ]
  },
  {
    quizId: 3,
    quizType: 1,
    stars: [1, 0, 0, 0, 0],
    title: '照片谜题',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '马冬警长刚刚不小心把一个叫陆齐的特级通缉犯的照片给撕碎了，一起撕碎的还有其他两个普通刑事案件犯罪嫌疑人的照片。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '幸好他手头还有一张陆齐的通缉画像。请从图片下方的四个选项中，选出陆齐的通缉令编号。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/zst7dcmj.jpg',
        height: 1400
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '479901'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '367315'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '723927'
          }]
        },
        {
          optionKey: 'D',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '367927'
          }]
        }
      ]
    },
    answerKey: 'A',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'A. 479901'
        }]
      },
      {
        solutionTag: '解析',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '请注意观察陆齐的嘴型。'
        }]
      }
    ]
  },
  {
    quizId: 4,
    quizType: 1,
    stars: [1, 1, 0, 0, 0],
    title: '甜蜜的诱惑',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '网红店可可烘焙屋的招牌甜品是一款名叫克拉赫堡的限量供应小蛋糕。正当店主徐可准备开门营业的时候，他接到了一个骚扰电话。等他挂掉电话回到店里却发现小蛋糕居然被人偷吃光了！在这短短的五分钟之内，只有财务经理赵莉、店员孙蓓和送货员周顺在现场。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '有足够的证据表明，偷吃小蛋糕的人此刻还在店里。请从图片下方的三个选项中，指出这个人是谁。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/fr0y17jz.jpg',
        height: 970
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '财务经理赵莉'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '店员孙蓓'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '送货员周顺'
          }]
        }
      ]
    },
    answerKey: 'C',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'C. 送货员周顺'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '撒着面粉的地面上印满了运动鞋鞋印。三名犯罪嫌疑人之中只有送货员周顺穿的是运动鞋。'
          }
        ]
      }
    ]
  },
  {
    quizId: 5,
    quizType: 1,
    stars: [1, 1, 1, 0, 0],
    title: '马可·波罗失踪了',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '世界公园里的马可·波罗雕像被人偷走了！嫌疑最大的两个人是门卫李大爷和园艺师孙师傅。请从图片下方的两个选项中，指出这个小偷是谁。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/vkbgz5f5.jpg',
        height: 980
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '门卫李大爷'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '园艺师孙师傅'
          }]
        }
      ]
    },
    answerKey: 'A',
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '地面的碎石堆里有一颗纽扣，门卫李大爷的制服上少了一颗一模一样的纽扣。'
        }
      ]
    }]
  },
  {
    quizId: 6,
    quizType: 1,
    stars: [1, 1, 1, 0, 0],
    title: '枯萎的神农香菊',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '神农香菊是神农架地区特有的珍稀草本植物，全株具有浓郁而独特的芳香，可以被制成顶级香料，而且还有清咽利喉、清热解毒的功效，被誉为菊中 “薰衣草”。遗憾的是，它的生长条件非常苛刻：只能生长在神农架海拔 2600 米以上的向阳开阔地带。中科院武汉植物研究所的科研团队对神农香菊进行了引种保育的应用研究，在神农架当地建成了种植研究基地。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '就在科研带头人王教授前往暖房准备观察那株精心选育的香菊的时候，他意外地发现香菊居然已经枯萎了！在此之前只有高个子助理研究员王史和女研究生吕燕分别来过暖房。到底是谁失手弄坏了它？请从图片下方的两个选项中，选出正确答案。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/svau38xj.jpg',
        height: 980
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '高个子助理研究员王史'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '女研究生吕燕'
          }]
        }
      ]
    },
    answerKey: 'B',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'B. 女研究生吕燕'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '吕燕的工作服上有许多仙人掌刺。应该是她在接触香菊的时候，不小心碰到了前面的那株仙人掌。'
          }
        ]
      }
    ]
  },
  {
    quizId: 7,
    quizType: 1,
    stars: [1, 1, 0, 0, 0],
    title: '扑克牌作弊',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '富商陈丹、演员陶梦、酒吧老板王治和销售经理贾尚四个人在王治的酒吧里喝酒聊天，顺手拿来一副扑克牌玩起了红十游戏。此刻他们之中有人正在作弊，请从图片下方的四个选项中，指出这个人是谁。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/exliniux.jpg',
        height: 970
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '富商陈丹（左上）'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '演员陶梦（右上）'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '酒吧老板王治（左下）'
          }]
        },
        {
          optionKey: 'D',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '销售经理贾尚（右下）'
          }]
        }
      ]
    },
    answerKey: 'D',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'D. 销售经理贾尚'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '一副扑克里只有四张 A。牌桌上已经有三张了，贾尚手里却还有两张红桃 A。'
          }
        ]
      }
    ]
  },
  {
    quizId: 8,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '被调包的硬币收藏品',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '德国纳高拍卖公司的业务经理米娅要送一批珍贵的硬币收藏品到汉堡市的买家手里。米娅的前同事瓦洛是一名狂热的硬币收藏爱好者，他很想将这批收藏品据为己有，于是千方百计打听到了米娅的行程安排，然后一路跟踪她到了火车站。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '就在米娅放下手提箱、抬头核对火车时刻表的时候，瓦洛悄悄走过去调换了箱子，然后迅速混入了人流之中。你找到瓦洛了吗？请在下图中指出他的位置。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/b0sbp1cw.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 260,
      y: 90
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '瓦洛提着外观一模一样的箱子，就站在小餐馆标识牌右侧的楼梯上。'
        }
      ]
    }]
  },
  {
    quizId: 9,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '诈骗犯贾亭',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '在前往机场的大巴上，程岚侦探紧紧地盯着坐在她前排座位上的诈骗犯贾亭。在法院下达限制出境令之前，程岚侦探必须阻止他坐飞机离境。贾亭的外貌特征很明显：他留着一把大胡子，还抱着一个大行李包。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '在拥挤的机场候机厅里，贾亭淡定地走进了男厕所，然后就消失不见了！程岚侦探很着急，她很需要你的帮助！请在下面的第二张图中帮她指出贾亭藏在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/dofilbre.jpg',
        height: 995
      }
    },
    answerArea: {
      x: 10,
      y: 270
    },
    solutions: [{
        solutionTag: '答案',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '贾亭就藏在报刊亭右侧的角落里。'
          }
        ]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '他把自己打扮成阿拉伯人，却没有想到他的大行李包暴露了他的真实身份。'
          }
        ]
      }
    ]
  },
  {
    quizId: 10,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '保密的面包配方',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '著名的食品生产商麦可·阿罗尼公司决定改良其备受好评的面条加工配方，明天就要召开新品发布会了。公司员工波奇刚刚无意间正好路过市场总监办公室的门口。透过半透明玻璃，他震惊地发现：新品配方居然被交给了竞争对手派来的商业间谍！'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '那名商业间谍现在已经走到大街上了。波奇决定为公司追回配方，避免无法挽救的商业损失。请在下面的第二张图中帮他指出间谍在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/gykm10pd.jpg',
        height: 1360
      }
    },
    answerArea: {
      x: 50,
      y: 430
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '那名商业间谍就走在大树的右侧，胳膊下面夹着文件袋。看发型就知道一定是她！'
        }
      ]
    }]
  },
  {
    quizId: 11,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '被砍掉的银杏树',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '早上七点钟，吴岳刚刚结束彻夜狂欢的公司聚会回到家里，却震惊地发现：昨晚有人趁他不在家的时候，把院子里的银杏树给砍掉了！吴岳脑海里第一个想到的人就是他的邻居汪宽，那个家伙经常抱怨吴岳的银杏树影响了自家院子的采光。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '吴岳上门找汪宽理论，却没有想到汪宽矢口否认并且一口咬定说：“我昨天去亲戚家玩了，整个晚上都没回来，刚刚五分钟之前才进家门，根本不可能去偷砍你的银杏树！”'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '汪宽肯定是在说谎，请在下图中指出他说谎的证据。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/yzljhs7y.jpg',
        height: 940
      }
    },
    answerArea: {
      x: 260,
      y: 170
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '一、汪宽的床铺很乱，说明他昨晚是在家里睡的。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '二、桌子上摆着早餐，说明汪宽正准备吃早饭，那么他肯定不是在五分钟之前才进家门的。'
        }
      ]
    }]
  },
  {
    quizId: 12,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '怪盗基佐在哪里',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '怪盗基佐是一名擅长使用魔术手法偷取珠宝的跨国大盗。国际刑警已经跟踪他很久了，却始终无法找到他藏在哪里。据目击者称，基佐就躲在他的中国朋友崔强家里。中国便衣警察以流动人口登记为理由，数次上门约谈崔强，崔强总是斩钉截铁地说自己是一个人住，家里没收留任何人。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '事实上，基佐就藏在崔强家里。请在下图中指出他说谎的证据。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/2qjhay5k.jpg',
        height: 990
      }
    },
    answerArea: {
      x: 246,
      y: 260
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '如果光头崔强真的是一个人住，那么他根本不需要梳子，梳子上也不可能有掉落的头发。'
        }
      ]
    }]
  },
  {
    quizId: 13,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '化妆舞会上的闹事者',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '万圣节当晚，在某公司的化妆舞会上，举办者收到了一封匿名信和一张照片。信中透露：照片中的男子不久前被该公司解雇了，他今天也混进了舞会。在接下来的抽奖环节中，这名郁闷的前同事会刻意制造混乱，借此宣泄自己对公司的不满。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '舞会举办者希望能尽快找到他，避免他破坏会场气氛，搞得大家都不愉快。请在下面的第二张图中指出他藏在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/imbhuyha.jpg',
        height: 1350
      }
    },
    answerArea: {
      x: 164,
      y: 280
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '闹事者的左耳上戴着耳环。'
        }
      ]
    }]
  },
  {
    quizId: 14,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '绿野仙踪之铁皮人',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '今晚七点在中国木偶剧院即将上演由德国艺术团队主创的《绿野仙踪之铁皮人》儿童舞台剧。现在距离开幕只有十分钟时间了，矮胖的演员布鲁诺却发现自己的铁皮人服装居然被人偷走了！剧组负责人只好临时启用高瘦的替补演员莱奥出演这个重要角色。布鲁诺很生气，他怀疑是莱奥一手策划了这次临场换角事件！请在下图中帮助布鲁诺找到相应的证据。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/5jkqjy7k.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 144,
      y: 270
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '莱奥把布鲁诺的铁皮人服装藏在自己的更衣室里了。'
        }
      ]
    }]
  },
  {
    quizId: 15,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '邮轮上的偷渡客',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '由青岛开往朝鲜平壤的海洋礼赞号旅游邮轮刚刚在朝鲜南浦港码头靠岸了。谁都没有发现一名偷渡客正悄悄地划着小艇靠近了邮轮。等船员们把小艇打捞上来的时候，才发现偷渡客已经成功地混入了旅行团。请在下图中指出他藏在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/86wqwnhm.jpg',
        height: 970
      }
    },
    answerArea: {
      x: 6,
      y: 30
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '在邮轮最上层的甲板上穿着一只鞋的人就是偷渡客，他的另外一只鞋落在小艇里了。'
        }
      ]
    }]
  },
  {
    quizId: 16,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '花园陶俑爱好者',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '北京工艺美术博物馆的《小提琴手》花园陶俑工艺品被人偷走了！从昨天的监控录像中可以模糊辨认是内部工作人员李娜在下班后顺手拿走了这件展品。警方来到了李娜家的后院，发现她的确是一名花园陶俑爱好者。院子里摆满了她精心购置的花园陶俑，却丝毫找不到那件失窃展品的踪迹。请在下图中帮助警方尽快破案。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/a8jbc4rk.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 30,
      y: 360
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '李娜把偷来的展品藏在了自己的花园小屋里，就在紧挨着门的地上。'
        }
      ]
    }]
  },
  {
    quizId: 17,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '居然是赝品版画',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '王军热衷于收藏德国艺术家阿尔布雷希特·丢勒的作品。他的好朋友刘益刚刚收购了别人转让的、据说是丢勒的早期版画作品《偷吃甜食的小姑娘》，于是兴高采烈地拿给王军看。王军只看了一眼就大惊失色地说：“你被骗了，这是赝品！” 请在下图中指出问题在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/c61a4cde.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 196,
      y: 140
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '赝品版画中出现了一部电话。电话公认是由美国人贝尔在1876年发明的，而阿尔布雷希特·丢勒则是德国文艺复兴时期最著名的艺术家。在丢勒生活的时代，电话尚未出现。'
        }
      ]
    }]
  },
  {
    quizId: 18,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '伪造护照非法入境',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '来自德国菲林根-施文宁根市的舒蒙尔在北京首都机场出入境边防检查站被拦了下来。边防检察官认定舒蒙尔的护照是伪造的。请在下图中指出问题在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/afse8tpj.jpg',
        height: 1000
      }
    },
    answerArea: {
      x: 190,
      y: 420
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '1',
          blockType: 'normal-text',
          text: '舒蒙尔护照上的出生日期是1947年2月30日，但其实这一天根本不存在。'
        }
      ]
    }]
  },
  {
    quizId: 19,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '珠宝店失窃案',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '梵克雅宝珠宝旗舰店昨晚失窃了，警方在案发现场的专柜处发现了犯罪嫌疑人的指纹。请在下图的犯罪前科指纹数据库中指出犯罪嫌疑人是谁。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/aqnj8sdk.jpg',
        height: 1400
      }
    },
    answerArea: {
      x: 148,
      y: 414
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '指纹完全吻合的犯罪嫌疑人是迈克斯·克维尔。'
        }
      ]
    }]
  },
  {
    quizId: 20,
    quizType: 1,
    stars: [1, 1, 1, 0, 0],
    title: '大约在冬季',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '普法伊弗尔在小镇上开了一家烟酒便利店。一个下雪的早晨，他刚刚从储藏室里清点完库存商品回到收银台，却发现收银机里的现金全部被人拿走了！请在图片下方的四个选项中指出谁是最不可能作案的人。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/fbxsmmf5.jpg',
        height: 990
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '洛拉·施密'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '奥托·莱克'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '特奥·菲契尔'
          }]
        },
        {
          optionKey: 'D',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '阿格娜丝·洛策尔'
          }]
        }
      ]
    },
    answerKey: 'B',
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '从雪地上奥托·莱克的脚印痕迹可以看出，他只是在店外停留了一会儿就离开了。'
        }
      ]
    }]
  },
  {
    quizId: 21,
    quizType: 1,
    stars: [1, 1, 1, 0, 0],
    title: '沉睡的施纳尔博士',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '当施纳尔博士的妻子在书房里发现他的时候，他已经服用过量安眠药与世长辞了。当地刑侦队队长周巡接到报案后立刻赶来勘察现场。请从图片下方的两个选项中，帮助周巡队长指出施纳尔博士是自杀还是被谋杀。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/bmjdbqwd.jpg',
        height: 990
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '自杀'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '被谋杀'
          }]
        }
      ]
    },
    answerKey: 'B',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'B. 被谋杀'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
            blockId: '1',
            blockType: 'tab'
          },
          {
            blockId: '2',
            blockType: 'normal-text',
            text: '从施纳尔博士书架上的照片里可以清晰地看出他是个左撇子，可是他临终之前握笔写字的手却是右手。很有可能是凶手在杀害他以后伪造了自杀现场。'
          }
        ]
      }
    ]
  },
  {
    quizId: 22,
    quizType: 1,
    stars: [1, 0, 0, 0, 0],
    title: '动物园里的猪獾',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '请从图片下方的三个选项中，指出是谁近距离观察猪獾。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pffnm8d2.jpg',
        height: 720
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
          optionKey: 'A',
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '王教授'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pffnm8d2_a.jpg',
                width: 100,
                height: 150
              }
            }
          ]
        },
        {
          optionKey: 'B',
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '研究生吕燕'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pffnm8d2_b.jpg',
                width: 100,
                height: 150
              }
            }
          ]
        },
        {
          optionKey: 'C',
          optionData: [{
              blockId: '1',
              blockType: 'normal-text',
              text: '摄影师张博'
            },
            {
              blockId: '2',
              blockType: 'return'
            },
            {
              blockId: '3',
              blockType: 'image',
              image: {
                url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pffnm8d2_c.jpg',
                width: 100,
                height: 150
              }
            }
          ]
        }
      ]
    },
    answerKey: 'C',
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'C.'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'tab',
        }, {
          blockId: '2',
          blockType: 'normal-text',
          text: '公园草地上有一卷废弃的胶卷。'
        }]
      }
    ]
  },
  {
    quizId: 23,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '阅兵方队中的假警察',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '瑞士施皮茨小镇正在举办盛大的阅兵仪式，现在缓缓走来的是拉赫警察方队。忽然，观看阅兵仪式的人群里有观众大声呼喊道：阅兵方队里有个假警察！请在下图中指出那个假警察是谁。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/24tjhykl.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 106,
      y: 180
    },
    solutions: [{
      solutionTag: '答案',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '那个假警察在从前向后数第六排，从左向右数第二列。他身上穿的制服款式与其他警察完全不同。'
        }
      ]
    }]
  },
  {
    quizId: 46,
    quizType: 2,
    title: '煎排骨和肥皂泡',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'A'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '注意树叶的数量'
        }]
      }
    ]
  },
  {
    quizId: 47,
    quizType: 2,
    title: '误入歧途的女水怪',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/kd2ojfdj.jpg',
        height: 590
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '小园'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '请根据血迹辨认：杀死我的人名小园'
        }]
      }
    ]
  },
  {
    quizId: 48,
    quizType: 2,
    title: '尖锐的牙齿',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号的危险没有被其他人的目光观察到'
        }]
      }
    ]
  },
  {
    quizId: 49,
    quizType: 2,
    title: '足球图案包装的口香糖',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/mdflcft1.jpg',
        height: 540
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '右侧'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '请观察闹钟，早上五点钟的太阳尚未升起'
        }]
      }
    ]
  },
  {
    quizId: 50,
    quizType: 2,
    title: '多了一个歌手？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ehojr9rf.jpg',
        height: 900
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '三楼'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
        }]
      }
    ]
  },
  {
    quizId: 61,
    quizType: 2,
    title: '一会儿向左，一会儿向右',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/dzeeg4n7.jpg',
        height: 630
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '仔细观察照片'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
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
    quizId: 62,
    quizType: 2,
    title: '蓝色布加迪',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/sno6yltt.jpg',
        height: 450
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '3 号'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
        }]
      }
    ]
  },
  {
    quizId: 63,
    quizType: 2,
    title: '图片谜题',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/rftzhfxr.jpg',
        height: 315
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'BILL'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
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
    quizId: 64,
    quizType: 2,
    title: '狗牙齿清洁机',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '福生侦探每周三都会和几个老朋友在楚尔卡茨饭店聚会。他去参加聚会时经常能看到住在饭店附近的发明家施皮罗，施皮罗制造了各种稀奇古怪的机器，但是今天他万分沮丧，因为他的最新发明——宠物牙齿自动清洁机被人恶意破坏了。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '“肯定是昨天下午我离开时发生的，”施皮罗回忆道，“我觉得我的房东富尔勒就是搞破坏的人，因为我上个月没有付房租，他一只威胁我，如果不尽快付房租就要我好看。”福生侦探提出到施皮罗的房间看一下现场，当施皮罗打开房门时，刚好房东富尔勒从走廊经过，福生侦探立即向他问起此事。'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '富尔勒怒气冲冲地回答：“我昨天去参加聚会了，从下午两点到晚上11点一直在楚尔卡茨饭店里。”'
        },
        {
          blockId: '9',
          blockType: 'return'
        },
        {
          blockId: '10',
          blockType: 'tab'
        },
        {
          blockId: '11',
          blockType: 'normal-text',
          text: '福生侦探冷笑着说：“不要说谎了，一定是你破坏了施皮罗的机器。”为什么福生侦探认为富尔勒说谎了？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'image',
          image: {
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
            height: 285
          }
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '先踩上去的脚印会被后踩上去的脚印覆盖'
        }]
      }
    ]
  },
  {
    quizId: 65,
    quizType: 2,
    title: '卢多在逃',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '卢多又犯下了罪行：这个诡计多端的骗子从奶牛场主莫尔克那里骗了一大笔钱。吉塔侦探接到消息，卢多藏在高速路附近的工棚里。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '当吉塔侦探找到工棚时，工人们已经结束午休回到工地继续工作了。不过，吉塔侦探观察了下桌子，发现还有人没有走，她立刻联想到卢多应该还藏在这里！可是工棚内空无一人，难道卢多打开的窗户逃跑了？或者他还躲在工棚内？请在下图中指出关于卢多行踪的线索。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/4p712s5w.jpg',
        height: 630
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
        }]
      }
    ]
  },
  {
    quizId: 66,
    quizType: 2,
    title: '多面先生',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '老千卡尔洛凭借出色的伪装和易容技巧在多家赌场赢得大笔现金，从来没有被抓住。昨天晚上他再次出现在多米诺赌场作案，这家赌场直到卡尔洛用筹码换走现金才发现之前一直在赢钱的人就是老千卡尔洛。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '不过，在卡尔洛参与的轮盘赌桌边上刚安装了一台隐形照相机，能自动给参与轮盘赌的人拍照。赌场经理交给福生侦探12张照片，都是昨晚曾经参与过轮盘赌的客人，他希望用这些照片来警示其他赌场。你能帮助他们找出照片中的哪几个人是卡尔洛易容的吗？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/b8p0a3be.jpg',
        height: 630
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '谋杀'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '从楼梯上摔下应该是面朝下，而不是面朝上'
        }]
      }
    ]
  },
  {
    quizId: 67,
    quizType: 2,
    title: '落入他人手中的情书',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '吉塔侦探拜访了菲尔德马戏团，但是整个马戏团的气氛十分沉闷，空中飞人的表演者梅拉达十分伤心，因为观看表演的客人瓦伦诺写给她的情书不见了。这封信原本放在她床头柜的抽屉里，但是今天早上她睡醒后却发现不见了。而昨天晚上表演结束后，梅拉达吃了一颗安眠药助眠，所以睡得很熟，没有听到任何动静。'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '马戏团经理请吉塔侦探去梅拉达的房间查看，舞蹈演员洛拉正在房间里安慰着伤心的梅拉达。吉塔侦探环视了梅拉达的房间，询问了一些问题，然后说：“许多作案人都会回到作案现场，很显然您也是，洛拉。我相信，您也十分喜欢那位客人瓦伦诺，但是这绝不是您偷走给梅拉达的信件的理由，请立刻归还那封情书。”'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '那么，吉塔侦探是如何推断洛拉是小偷呢？请在下图中指出线索。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/ymkidwpn.jpg',
        height: 378
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '87 号'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
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
    quizId: 68,
    quizType: 2,
    title: '穿过窗玻璃的威胁',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '帕罗蒂太太指着破碎的窗户对吉塔侦探说：“昨天晚上，一块石头击碎我的窗户玻璃飞进屋内，石头外面包着一张纸，写着：再不让你那呱噪不停的鹦鹉闭嘴的话，它就要永远闭嘴了！”'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '吉塔侦探挨个拜访了帕罗蒂太太的邻居，询问他们昨晚在做什么。当所有人回答了问题之后，吉塔侦探就知道了谁在威胁帕罗蒂太太。那么，那个人是谁呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/zca1v5q0.jpg',
        height: 420
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '谋杀'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
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
    quizId: 69,
    quizType: 2,
    title: '诱人的酬劳',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '刚刚银行遭到了抢劫，三个抢匪闯入银行后迅速得手逃跑。同银行在同一幢大楼办公的福生侦探迅速来到案发现场并展开调查。手足无措的银行经理大喊道：“有没有人能提供一些线索，银行将重金感谢！”'
        },
        {
          blockId: '3',
          blockType: 'return'
        },
        {
          blockId: '4',
          blockType: 'tab'
        },
        {
          blockId: '5',
          blockType: 'normal-text',
          text: '莫特林太太飞速穿过马路，大叫到：“我能提供线索！刚才我正好在对面的食品店买东西，正当我从商店出来的时候，突然看到几个人跑出银行，他们跳上了一辆绿色的货车，往普尔策广场方向开走了。”'
        },
        {
          blockId: '6',
          blockType: 'return'
        },
        {
          blockId: '7',
          blockType: 'tab'
        },
        {
          blockId: '8',
          blockType: 'normal-text',
          text: '银行经理稍微送了口气，毕竟开始有一些线索了。莫特林太太也很高兴可以拿到酬劳。但是在一旁听她叙述的福生侦探则让她扫兴了。“您的描述从头到尾都是虚构的，您是为了骗取报酬。”那么，为什么福生侦探知道莫特林太太说谎了呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/7ngefjnt.jpg',
        height: 546
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'A'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '注意树叶的数量'
        }]
      }
    ]
  },
  {
    quizId: 70,
    quizType: 2,
    title: '谁最有可能遇到危险？',
    bgmUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/audios/l.mp3',
    timed: true,
    timeLimit: 120000,
    question: {
      questionId: 1,
      questionTextData: [{
          blockId: '1',
          blockType: 'tab'
        },
        {
          blockId: '2',
          blockType: 'normal-text',
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的作案人。福生侦探并不认识这名罪犯，他仅仅知道该罪犯习惯通过这条线路来从事可疑的业务，福生侦探希望等他作案时将他当场抓获。很快，所有的行李都被放入大客车的行李厢内，当福生侦探迅速看了一下皮包和箱子后，他发现：在停车场上一共有19件行李，然而现在行李厢内仅有18件。那个作案人一定在最后一刻认出了福生侦探，并看清了福生侦探的意图，于是他悄悄地溜之大吉了。那个人是谁？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/815gta2a.jpg',
        height: 420
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号的危险没有被其他人的目光观察到'
        }]
      }
    ]
  },
  {
    quizId: 71,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '右侧'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '请观察闹钟，早上五点钟的太阳尚未升起'
        }]
      }
    ]
  },
  {
    quizId: 72,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '三楼'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '裸体男子翻窗逃跑时一般不会往上爬或者挂在窗前；另外他的屁股上有伤，可能是三楼窗台上的仙人掌所致'
        }]
      }
    ]
  },
  {
    quizId: 73,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '仔细观察照片'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
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
    quizId: 74,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '3 号'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '在不被人注意的情况下进入女洗手间行凶，3 号顾客具备更有利的作案条件'
        }]
      }
    ]
  },
  {
    quizId: 75,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: 'BILL'
        }]
      },
      {
        solutionTag: '解析',
        align: 'left',
        solutionData: [{
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
    quizId: 76,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'image',
          image: {
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q6j8pc7e.jpg',
            height: 285
          }
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '先踩上去的脚印会被后踩上去的脚印覆盖'
        }]
      }
    ]
  },
  {
    quizId: 77,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '2 号弹孔裂痕挡住了 1 号和 3 号弹孔裂痕的蔓延'
        }]
      }
    ]
  },
  {
    quizId: 78,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '谋杀'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '从楼梯上摔下应该是面朝下，而不是面朝上'
        }]
      }
    ]
  },
  {
    quizId: 79,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '87 号'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
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
    quizId: 80,
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
    solutions: [{
        solutionTag: '答案',
        align: 'center',
        solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '87 号'
        }]
      },
      {
        solutionTag: '提示',
        align: 'left',
        solutionData: [{
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
  }
]

module.exports = QuizzesData