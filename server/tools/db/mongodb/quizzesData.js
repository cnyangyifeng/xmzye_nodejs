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
    stars: [1, 1, 1, 0, 0],
    title: '',
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
        text: ''
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
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pvx6hs25_a.jpg',
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
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pvx6hs25_b.jpg',
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
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pvx6hs25_c.jpg',
            width: 100,
            height: 100
          }
        }
        ]
      },
      {
        optionKey: 'D',
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
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pvx6hs25_d.jpg',
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
        text: ''
      }]
    }
    ]
  },
  {
    quizId: 23,
    quizType: 1,
    stars: [1, 1, 0, 0, 0],
    title: '',
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
        text: ''
      }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/8cv12ut9.jpg',
        height: 860
      }
    },
    options: {
      layout: 'row',
      optionsData: [{
        optionKey: 'A',
        optionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '歹徒已经跳窗逃跑了'
        }]
      },
      {
        optionKey: 'B',
        optionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '歹徒还藏在屋子里'
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
        text: '歹徒还藏在屋子里。'
      }
      ]
    }]
  },
  {
    quizId: 24,
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
    quizId: 25,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '海水浴场的盗窃犯',
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
          text: '警方刚刚接到了一名游客在瑞士因特拉肯海水浴场打来的报警电话，受害者声称自己的钱包被人偷走了！他还详细地描述了小偷的长相：长着黑头发，留着黑胡子，戴着眼镜，穿着白衬衫、白裤子，外面还套了一件黑夹克。请在下图中指出受害者描述的小偷藏在哪里。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/r1uk2pfg.jpg',
        height: 980
      }
    },
    answerArea: {
      x: -20,
      y: 140
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
          text: '小偷就在海水浴场的更衣室门口，刚刚把黑夹克、白衬衣、白裤子脱了下来。'
        }
      ]
    }]
  },
  {
    quizId: 26,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '小狗勇斗歹徒',
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
          text: '张芳周末在家里躺在床上带着耳机听歌的时候，忽然听见自己养的小狗狂叫不止，然后它就冲到客厅里去撕咬什么东西去了。张芳急忙跟过去，发现小狗正在和一个入室抢劫的歹徒搏斗！歹徒被小狗吓得夺门而逃，张芳惊魂未定，立即拨打电话报警。歹徒现在尚未逃远，请帮助警方在大街上的人群中找到他。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/1pnmb7ag.jpg',
        height: 1260
      }
    },
    answerArea: {
      x: 0,
      y: 360
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
          text: '歹徒的方格裤子上有一个被小狗撕碎的破洞。'
        }
      ]
    }]
  },
  {
    quizId: 27,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '',
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
        text: ''
      }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/wrrh4mjs.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 80,
      y: 305
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
        text: ''
      }
      ]
    }]
  }
]

module.exports = QuizzesData