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
          text: '李阿姨颤抖着说，刚刚有个白色的幽灵从客厅里一闪而过。她壮着胆子去检查，没有找到幽灵却发现中奖的彩票不见了。'
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
          text: '警方怀疑这是人为制造的障眼法，于是紧急传讯了三名嫌疑人并询问他们刚刚在干什么。张太太说自己正在做菜。范先生说自己出去买东西了，刚回来。邵先生说自己刚洗完澡从浴室里出来。'
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
            text: '邵先生在说谎。如果他真的刚洗完澡从浴室里出来，那么头发应该是湿的，更不应该在浴袍里面还穿着衬衫、打着领带。'
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
          text: '陈平先生珍藏多年的黒女王邮票被人偷走了。他认真回忆了一下，确定今天只有三个外人李冰、杨阳、王萍来过家里。应该是他们之中有人从书房的集邮册里拿走了这枚邮票。'
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
          text: '李冰是一名维修工，他说自己一整天都在厨房里修理水龙头，没有进过其他房间。杨阳是一名保险推销员，他说自己是来送保险文件的，把文件放到客厅桌子上就走了。王萍是一名保洁阿姨，她每周都来家里打扫卫生，但是书房一直都是陈平先生亲自收拾的，不需要她帮忙。'
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
          text: '马飞警长刚刚不小心把一个叫陆齐的特级通缉犯的照片给撕碎了，一起撕碎的还有其他两个普通刑事案件犯罪嫌疑人的照片。'
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
          text: '幸好他手头还有一张陆齐的通缉画像。请从图片下方的三个选项中，选出陆齐的通缉令编号。'
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
          text: '网红店可可烘焙屋的招牌甜品是一款名叫克拉赫堡的限量供应小蛋糕。正当店主徐可准备开门营业的时候，他接到了一个骚扰电话。等他挂掉电话回到店里，却发现小蛋糕居然被人偷吃光了。在这短短的五分钟之内，只有财务经理赵莉、店员孙蓓和送货员周顺在现场。'
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
            text: '撒着面粉的地面上印满了运动鞋鞋印。三名嫌疑人之中只有送货员周顺穿的是运动鞋。'
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
          text: '世界公园里的马可·波罗雕像被人偷走了！最大的嫌疑对象是门卫李大爷和园艺师孙师傅。请从图片下方的两个选项中，指出这个小偷是谁。'
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
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '被调包的收藏品',
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
          text: '德国纳高拍卖公司的业务经理米娅要送一批珍贵的硬币收藏品到汉堡市的买家手里。米娅的前同事瓦洛是一名狂热的硬币收藏者，他很想将这批收藏品据为己有，于是千方百计打听到了米娅的行程安排，然后一路跟踪她到了火车站。'
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
          text: '就在米娅放下手提箱、抬头核对火车时刻表的时候，瓦洛悄悄走过去调换了箱子，然后迅速混入人流之中，很快就要消失不见了。你找到瓦洛了吗？请在下图中指出他的位置。'
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
          text: '瓦洛提着外观一模一样的箱子，就站在 “小餐馆” 标识牌右侧的楼梯上。'
        }
      ]
    }]
  },
  {
    quizId: 7,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '诈骗犯贾云亭',
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
          text: '在前往机场的大巴上，程岚侦探紧紧地盯着坐在她前排座位上的诈骗犯贾云亭。在法院下达限制出境令之前，程岚侦探必须阻止他坐飞机离境。贾云亭的外貌特征很明显：他留着一把大胡子，还抱着一个大行李包。'
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
          text: '在拥挤的机场候机厅里，贾云亭走进了男厕所，然后就消失不见了。他一定是变装易容了！程岚侦探现在很着急，她很需要你的帮助！请在下面的第二张图中帮她指出贾云亭藏在哪里。'
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
            text: '贾云亭就藏在报刊亭右侧的角落里。'
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
    quizId: 8,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '保密的新品配方',
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
          text: '著名的食品生产商麦可·阿罗尼公司决定改良其备受好评的面条加工配方，明天就要召开新品发布会了。公司员工波奇刚刚无意间路过市场总监办公室。透过半透明玻璃，他震惊地发现：新品配方居然被交给了竞争对手派来的商业间谍！'
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
          text: '那名商业间谍现在已经走到大街上了。波奇决定为公司追回配方，避免无法挽救的商业损失。请在下面的第二张图中帮他指出间谍到底在哪里。'
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
          text: '那名商业间谍就走在大树的右侧，胳膊下面还夹着文件袋呢。看发型就知道一定是她！'
        }
      ]
    }]
  },
  {
    quizId: 9,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '被偷砍掉的银杏树',
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
          text: '早上七点钟，吴岳刚刚结束彻夜狂欢的公司聚会回到家里，却震惊地发现：昨晚有人趁他不在家的时候，把院子里的银杏树给砍掉了！吴岳脑海里第一个想到的就是他的邻居汪宽。那个家伙经常抱怨银杏树影响了自家院子的采光。'
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
          text: '吴岳上门找汪宽理论，却没想到汪宽矢口否认并且一口咬定说：“我昨天去亲戚家玩了，整个晚上都没回来，刚刚五分钟之前才进家门，根本不可能去偷砍你的银杏树！” 汪宽肯定是在说谎，请在下图中指出他说谎的证据。'
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
    quizId: 10,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '怪盗基佐的藏身之处',
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
          text: '怪盗基佐是一名擅长使用魔术手法偷取珠宝的跨国大盗。国际刑警已经跟踪他很久了，却始终无法找到他藏在哪里。据目击者称，基佐就躲在他的中国朋友崔强家里。中国便衣警察以查户口为由，数次登门拜访崔强，崔强总是斩钉截铁地说自己是一个人住，家里没有别人。'
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
    quizId: 11,
    quizType: 2,
    stars: [1, 1, 0, 0, 0],
    title: '盛大的化妆舞会',
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
          text: '万圣节当晚，在某公司的化妆舞会上，举办者收到了一封匿名信和一张照片。信中透露：照片中的男子不久前被公司解雇了，他今天也混进了舞会。在接下来的抽奖环节中，这名郁闷的前同事会刻意制造混乱，借此宣泄自己对公司的不满。'
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
          text: '舞会举办者希望尽快找到他，避免破坏气氛，搞得大家都不痛快。请在下面的第二张图中指出他藏在哪里。'
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
        blockType: 'normal-text',
        text: '闹事者的左耳上戴着耳环。'
      }]
    }]
  },
  {
    quizId: 12,
    quizType: 2,
    stars: [1, 1, 1, 0, 0],
    title: '星光蓝宝石',
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
          text: '陶施拜因在他的珠宝店内焦急地说：“星光蓝宝石，我最精美的宝石不见了！”吉塔侦探环顾了商店说：“请您描述一下案发过程。”'
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
          text: '陶施拜因先生深深地吸了口气：“一切都发生得太快了。大约在17点15分时，一位先生来到店里，他对星光蓝宝石很感兴趣，为了避免干扰，我们就到店后面的顾客室去了。这位先生先是在仔细观察那颗宝石，然后突然跳起来，拿着宝石就跑回店里，一脚把顾客室的门踢上关住，阻挡住了我。他逃到了大街上，很快就混入人群消失不见了。”'
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
          text: '吉塔侦探再次观察了商店，向店主提出一个问题：“这颗宝石是否上了保险?”当陶施拜因先生给予肯定的回答后，她就确定这是珠宝商自导自演的骗局，要借此骗取保险金。因为在他的描述中，有一点不正确。那么，是哪一点呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/utfsxusz.jpg',
        height: 960
      }
    },
    answerArea: {
      x: -10,
      y: 96
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '陶施拜因先生讲述的故事并不正确，他不可能从店里用脚踢上顾客室的门，因为门是向内打开的。'
      }]
    }]
  },
  {
    quizId: 13,
    quizType: 2,
    title: '布鲁诺的服装不翼而飞',
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
          text: '霍夫剧院里一片混乱！离演出开始只有 3 分钟了！矮胖敦实的男主角布鲁诺，双手湿漉漉地跑过化妆更衣室过道，他还穿着浴袍！布鲁诺在《0Z的魔术师》中扮演铁皮人，通常在这个时候他应该已经穿好铁皮戏服。可是今天晚上他的戏服失踪了，而且现在根本没时间为布鲁诺准备新的戏服——尤其是必须适合他的矮胖身材！'
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
          text: '走投无路的剧院经理别无选择，只能启用布鲁诺的替补演员——身材修长的莱奥出演这个角色。令布鲁诺惊讶的是，莱奥已经早早穿好戏服，准备完毕了！'
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
          text: '“这太可疑了！”布鲁诺怒气冲冲地说，他确信一定是莱奥做了手脚。那么，有什么证据能证明，莱奥事先做过手脚？'
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
        blockType: 'normal-text',
        text: '莱奥为了能够登台演出而将布鲁诺的铁皮人戏服藏在自己位于楼梯下方的化妆更衣室里。'
      }]
    }]
  },
  {
    quizId: 14,
    quizType: 2,
    title: '被打搅的游轮之旅',
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
          text: '吉塔侦探终于可以休假了！她参加了游轮旅行团，在甲板上尽情地享受假期。突然，船上响起了警钟。“甲板上有偷渡客！”船长从广播中宣布。水手和船上的工作人员在甲板上冲来冲去，搜寻偷渡客。'
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
          text: '船长知道老朋友吉塔侦探在船上，就请她帮忙。虽然吉塔侦探不想在假期中办案，但她还是爽快地答应帮忙。'
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
          text: '吉塔侦探检查了偷渡客曾经藏身的救生艇之后， 她已经知道要找到偷渡客并不难。那么，偷渡客现在藏在哪里呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/86wqwnhm.jpg',
        height: 970
      }
    },
    answerArea: {
      x: 10,
      y: 50
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '在游轮顶层夹板的左边，有一个只穿着一只鞋的人，他就是偷渡客。他从救生艇匆忙逃跑时把另一只鞋掉在了救生艇里。'
      }]
    }]
  },
  {
    quizId: 15,
    quizType: 2,
    title: '音乐家花园陶俑',
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
          text: '乌多是花园陶俑博物馆的馆长，当他走过收藏品时，十分惊讶地发现“坐着的小提琴手”陶俑不在原来的位置上，它毫无迹象地消失了！乌多馆长立即报告了这起偷窃案，“肯定是希尔达·齐普弗从中作梗！现在只有福生和吉塔侦探能帮忙。”'
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
          text: '希尔达住在河边的花园小屋内，她同样十分喜欢花园陶俑，一直向博物馆申请购买“坐着的小提琴手”陶俑，总是遭到婉拒。福生和吉塔侦探拜访了希尔达，并仔细查看了她的陶俑乐园。希尔达听到偷窃事件时惊慌失措，一再保证自己和这件事毫无关系。那么，福生和吉塔侦探能找到反驳她的证据吗？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '希尔达把偷来的陶俑藏在自己的花园小屋里，就在紧挨门口的地上。'
      }]
    }]
  },
  {
    quizId: 16,
    quizType: 2,
    title: '突然死亡的玛格丽塔雏菊',
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
          text: '罗莎·格林斯的梦想即将成真：经过无数次的努力，她终于成功种植了一棵玛格丽塔雏菊。玛格丽塔雏菊是一种特别需要阳光的植物，黑暗对它而言就意味着死亡，因此它必须放在花园暖房的最上层，就在玻璃屋顶的下方。'
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
          text: '几周以来，罗莎和她的雇员里塔·平克以及阿尔多·施特雷克共同照料这棵罕见的植物。明天，玛格丽塔雏菊将在盛大的植物种植者大会上展出。但是今天晚上，罗莎遭到了致命打击！在花架的最下方，她的玛格丽塔雏菊在黑暗中枯萎了，耷拉着倒了下来，就在蕨类植物和仙人掌之间。罗莎意识到有人要阻止她出席植物种植者大会，于是她马上向福生侦探报案！'
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
          text: '只有罗莎的雇员里塔和阿尔多有花园暖房的钥匙，于是福生侦探把两个雇员叫到面前询问。这里是他们的陈述：阿尔多说他已经很久没去暖房了。里塔说他昨天一整天都在办公室里度过。但是福生侦探凭借敏锐的观察，立即告诉罗莎谁说谎了。'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/svau38xj.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 30,
      y: 290
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '说谎的是雇员里塔·平克，她的工作服上有许多仙人掌刺，是她在挪走玛格丽塔雏菊后，弯腰放在花架最下层时由于黑暗看不清周围环境而沾到了仙人掌刺。'
      }]
    }]
  },
  {
    quizId: 17,
    quizType: 2,
    title: '米基·库尔的踪迹',
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
          text: '几周以来，福生侦探一直在跟踪保险箱撬窃者米基·库尔（Mickey Chur）。在从侦探社回家的路上，他在地铁站西出口和这个嫌疑人擦肩而过，但是一眨眼的时间米基就消失在人群中。福生侦探没有放弃搜寻，他跟踪了一个可能是米基的男子，但是福生侦探并不能肯定。福生侦探继续跟踪，拐进了一片昏暗的工厂区。在一家还有灯光的老锻造工厂里，福生侦探发现了一样东西，证明他追踪的是正确的线索，米基的确藏在这里。那么福生侦探发现了什么呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/ztye1s4u.jpg',
        height: 1360
      }
    },
    answerArea: {
      x: 234,
      y: 568
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '米基·库尔的工具箱在老锻造工场里，上面还有他的名字的首字母缩写MC，福生侦探在地铁站就看到了这个保险箱撬窃者提着工具箱匆匆走过。'
      }]
    }]
  },
  {
    quizId: 18,
    quizType: 2,
    title: '普法芬堡将军失踪记',
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
          text: '“我的《普法芬堡将军》被偷了！”冯·科尔肯施泰因男爵夫人在庄园中惊慌失措地大叫。《普法芬堡将军》是一幅名画，很多艺术品收藏家都想拥有。吉塔侦探能破解这次盗窃案吗？男爵的庄园里可是有许多犯罪嫌疑人：女佣、厨师、烟囱清洁工、司机、园丁，甚至可能是男爵或者男爵夫人自导自演了一场骗局？吉塔侦探首先仔细观察了四周，这是正确的决定！她很快发现了线索，现在她已经知道是谁偷了名画《普法芬保将军》。那个人是谁呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/142496kj.jpg',
        height: 560
      }
    },
    answerArea: {
      x: -18,
      y: 210
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '司机把《普法芬堡将军》藏在汽车后备箱中。'
      }]
    }]
  },
  {
    quizId: 19,
    quizType: 2,
    title: '图弗特尔的最新发明',
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
          text: '蒂诺·图弗特尔在他的实验室里开发出了新产品：一种保证有效的生发剂！就在同一天晚上，他邀请了一些同事和朋友来实验室，向他们展示自己的成果。就在他做介绍时，突发短路停电事故，整个实验室陷入黑暗中。还好图弗特尔很快就排除了故障，灯又亮了起来。可是他发现记录在笔记本上的生发剂分子式已经被撕掉了。这让他确信是现场的某人撕走了这张纸片。'
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
          text: '不过这个小偷很倒霉——因为图弗特尔也邀请了他的老朋友福生侦探。他只要稍稍观察一下，就能知道是谁偷走了分子式。你们也可以吗？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/93b1pf7y.jpg',
        height: 980
      }
    },
    answerArea: {
      x: 200,
      y: 170
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
          text: '图中最右侧的女士趁着黑暗偷走了印有机密分子式的纸片，夹在她胳膊下的文件资料中。'
        }
      ]
    }]
  },
  {
    quizId: 20,
    quizType: 2,
    title: '并非人人都是幸运儿',
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
          text: '齐勒塔尔家庭宠物展览会的大奖已经颁布，多莉·明斯克和她的可爱小猪仔平基成为胜利者！多莉高兴得忘乎所以，可是当她想要抱起平基时，她却大叫道小猪平基不见了。'
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
          text: '“一定有人偷走了平基，小猪对我很依赖，不会自己跑开的。”多莉抱怨道，那么她的推测正确吗？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/2ycyph4s.jpg',
        height: 960
      }
    },
    answerArea: {
      x: 250,
      y: 290
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '多莉的推测是正确的。有人把小猪平基藏在单肩包里偷偷带走，这个人和多莉在展示台的同一层。'
      }]
    }]
  },
  {
    quizId: 21,
    quizType: 2,
    title: '午夜牌局',
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
          text: '四个扑克爱好者聚在会员制的洛丽塔酒吧玩牌，他们分别是：可疑的花花公子罗茨·弗拉林、演员诺尔玛·劳斯、酒吧老板比尔·佩克和正在出差的商人萨姆·莫克。牌局在酒吧的私人VIP室中进行，通常这样的牌局赌注都很大，但是这场局牌其实早就有了结果，其中三家必定是输家。他们要注意什么才有可能不输钱呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/exliniux.jpg',
        height: 970
      }
    },
    answerArea: {
      x: 160,
      y: 270
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '出老千的人是图中右下角的商人萨姆·莫克。一副扑克牌中只有四张A，牌桌上已经有三张，而他手中却拿着两张同样花色的A。'
      }]
    }]
  },
  {
    quizId: 22,
    quizType: 2,
    title: '艺术品背后的诡计',
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
          text: '艺术品商人里克·洪德尔紧张地捋着头发，闷声抱怨道：“我也是第一次知道，这幅版画是赝品。”此前，里克正要把版画“偷吃甜食的小姑娘”卖给艺术品收藏家施蒂希莱恩。他声称这幅版画是一位16世纪的著名版画家的唯一存世之作，价值连城。不过，施蒂希莱恩立刻判断出这是赝品。那么，施蒂希莱恩为什么会产生怀疑呢？你能在这幅版画中找到答案吗？'
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
        blockType: 'normal-text',
        text: '版画中的小姑娘背后有一部电话。16世纪还没有发明电话。'
      }]
    }]
  },
  {
    quizId: 23,
    quizType: 2,
    title: '鞋店中的交接',
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
          text: '吉塔侦探获悉间谍005将和接头人X在一家鞋店里秘密交接一卷微型胶卷。整个交接过程如下：X走进索尔·沃尔鞋店，故意试穿了许多双鞋，店里很快就会乱作一团。他趁机悄悄地把微型胶卷藏到一只鞋内，再将另一只鞋塞入大衣后离开商店。'
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
          text: '在店员将铺满地面的鞋排放整齐之前，005走入了鞋店。他让店员展示了几双鞋，现在他只需要仔细观察找到那个单只的鞋，就可以拿走其中的胶卷。吉塔侦探还在等待，要等005将这个重要物品拿到手中，才能出面将他抓获。那么，这卷胶卷藏在哪只鞋中呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/togv925t.jpg',
        height: 425
      }
    },
    answerArea: {
      x: 170,
      y: 90
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '藏有微型胶卷的单只鞋没有穿鞋带，在图中店员的左耳上方。'
      }]
    }]
  },
  {
    quizId: 24,
    quizType: 2,
    title: '舒蒙尔先生不老实',
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
          text: '福生侦探要飞往纽约探望姑姑，他来到机场的出入境护照检查处排队，正好排在罗尔贝特·舒蒙尔先生身后，舒蒙尔也要去纽约。边检官员检查护照后说：“舒蒙尔先生，你的护照是伪造的。”舒蒙尔强烈抗议。'
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
          text: '福生侦探越过舒蒙尔的肩膀观察护照，一下子就笑了，他一眼就看出来这本护照的确是伪造的。为什么？'
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
        blockType: 'normal-text',
        text: '罗尔贝特·舒蒙尔护照上的出生日期是2月30日，但是根本不存在2月30日。'
      }]
    }]
  },
  {
    quizId: 25,
    quizType: 2,
    title: '仔细观察指印',
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
          text: '金匠冯克尔先生大惊失色，昨晚电影女主角贝蒂·布卢放在他店里的项链不见了，他刚刚在这条昂贵的项链上重新镶了一颗钻石。吉塔侦探用放大镜仔细观察了现场，她安慰这位金匠：“在展示柜的玻璃上有一枚清晰的指纹，这就够了。”她带了一套可能性最大的犯罪嫌疑人指纹索引卡在手边，现在只需要对比一下就可以了。很快，吉塔侦探脸上露出了微笑，她知道该去找谁了。那么罪犯是谁呢？'
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
        blockType: 'normal-text',
        text: '迈克斯·克维尔'
      }]
    }]
  },
  {
    quizId: 26,
    quizType: 2,
    title: '普福尔茨劳小姐',
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
          text: '自从内拉·莫普斯在“普福尔茨劳小姐”选美比赛中获胜后，晚上她常常听到楼梯上有脚步声。她对吉塔侦探说，有人在黑暗中偷偷潜入她的房子，她怀疑是玛丽·茨维利希——选美比赛第二名获得者，她一直想知道内拉的瘦身饮料配方！'
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
          text: '吉塔侦探看了一眼内拉的楼梯，随后就去拜访玛丽。不过，玛丽对这项指控大发雷霆：“我从没去过内拉的房子。我都不知道她住在哪里！”然而，吉塔侦探已经看到了证据。为什么她能确定内拉的怀疑是正确的？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/pbifv31n.jpg',
        height: 1450
      }
    },
    answerArea: {
      x: 184,
      y: 490
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '吉塔侦探在内拉的楼上发现了一只手套，另一只配套的手套则出现在玛丽·茨维利希的房间内，就在电视机下方的储物架上，因此玛丽肯定偷偷潜入过内拉的房子。'
      }]
    }]
  },
  {
    quizId: 27,
    quizType: 1,
    title: '机密文件的“火星移动”',
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
          text: '施诺茨教授激动地向吉塔侦探求助：当他去街角的咖啡店喝咖啡的时候，有人进入过他的办公室！办公桌上放着“火星移动”项目的机密资料，施诺茨教授这几年一直在苦苦钻研这个项目，马上就要完成了。教授推测, 可能是他的某一个助手想要泄密给竞争对手。'
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
          text: '“我们的想法是一样的！ ”吉塔侦探说道，她陪着教授回到办公室。'
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
          text: '助手们全部否认，以下是他们的陈述：'
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
          text: '曼弗雷德·施勒茨：“整个早上我都在实验室里，我第一次看到桌子上的机密资料！”'
        },
        {
          blockId: '12',
          blockType: 'return'
        },
        {
          blockId: '13',
          blockType: 'tab'
        },
        {
          blockId: '14',
          blockType: 'normal-text',
          text: '维尔马尔·普法夫：“我一直在自己的座位上，而且今天我把眼镜忘在家里了，我不可能看到您的机密资料。”'
        },
        {
          blockId: '15',
          blockType: 'return'
        },
        {
          blockId: '16',
          blockType: 'tab'
        },
        {
          blockId: '17',
          blockType: 'normal-text',
          text: '阿瑟·克洛斯：“我刚刚才进来，给自己冲了一杯咖啡，我根本没注意到您的资料。”'
        },
        {
          blockId: '18',
          blockType: 'return'
        },
        {
          blockId: '19',
          blockType: 'tab'
        },
        {
          blockId: '20',
          blockType: 'normal-text',
          text: '吉塔侦探很快注意到，三个助手中有一个人说了谎，那么是谁说谎了呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/25nc75db.jpg',
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
            text: '曼弗雷德·施勒茨'
          }]
        },
        {
          optionKey: 'B',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '维尔马尔·普法夫'
          }]
        },
        {
          optionKey: 'C',
          optionData: [{
            blockId: '1',
            blockType: 'normal-text',
            text: '阿瑟·克洛斯'
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
        blockType: 'normal-text',
        text: '维尔马尔·普法夫在说谎。他宣称把眼镜忘在家里了，没有它就没法看清教授的资料。但是显而易见，他不需要眼镜就可以毫无问题地阅读晨报！因此他根本不需要眼镜！'
      }]
    }]
  },
  {
    quizId: 28,
    quizType: 2,
    title: '感到危险',
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
          text: '兴高采烈的旅行团成员聚集在珀茨尔堡的大客车停车场上，他们将开始鲁茨克拉维亚10日游。福生侦探作为度假旅客也在其中，事实上，他在追踪一个长期走私鱼子酱的走私犯。福生侦探并没有这个走私犯的相貌信息，他仅仅知道该走私犯经常会通过这条线路来从事可疑的业务。很快，所有乘客的行李都被放入大客车的行李仓内，当福生侦探迅速看了一下行李后发现：之前在停车场上一共有19件行李，然而现在行李仓内仅有18件。那个走私犯一定在最后一刻认出了福生侦探，于是悄悄地溜之大吉了。那个人是谁呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/37qma0l9.jpg',
        height: 1385
      }
    },
    answerArea: {
      x: 248,
      y: 430
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '那个人就站在台阶上，在背着背包挥手的年轻人边上，他就是鱼子酱走私者。大客车的行李箱内没有他的箱子，他认出来福生侦探并逃之夭夭了。'
      }]
    }]
  },
  {
    quizId: 29,
    quizType: 2,
    title: '通缉追捕',
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
          text: '蒂诺·马茨是声名狼藉的婚姻骗子，长久以来，福生侦探一直都在想方设法阻止他，可惜都没有成功！他仅知道，蒂诺经常在知名度假胜地作案，总是关注那些渴望婚姻的富有女性。'
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
          text: '终于，骗子蒂诺犯下一个错误：在温特拉肯海滨浴场，他居然想要算计福生侦探的阿姨——富有的安东尼娅·洛阿格。安东尼娅怒气冲冲地将这一情况告知了自己的外甥，她详细地描述了骗子的长相：'
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
          text: '黑头发，黑胡子，戴眼镜，白衬衫，黑夹克，白裤子，在库尔巴德宾馆的浴场中见过他。'
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
          text: '福生侦探没有浪费时间，立即前往温特拉肯海滨浴场。他的迅速行动取得了成效，在库尔巴德宾馆的浴场中发现了蒂诺！那么，他们在哪里发现了蒂诺呢？'
        }
      ],
      questionImage: {
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/q/r1uk2pfg.jpg',
        height: 980
      }
    },
    answerArea: {
      x: -10,
      y: 140
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '蒂诺正要从图片上最靠左侧边缘的更衣间内出来。'
      }]
    }]
  },
  {
    quizId: 30,
    quizType: 2,
    title: '保险柜',
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
          text: '金属废料商人扬泽·道恩卡茨完全被搞糊涂了。在院子中间有一只罕见的保险柜，他指着它对福生和吉塔侦探说：“今天早上，有一个阴森森的家伙经过这里，把这个大东西留了下来。他说警察肯定对里面的东西感兴趣，里面有洛特法信坦克犯罪集团的信息以及他们的隐藏地点。我认为那个家伙以前也是该犯罪集团的成员。我刚想问他要怎么处理这个保险柜，他就走掉了！”'
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
          text: '保险柜门上贴着一张纸条，写着以下内容：'
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
          text: '一头驴用便携计算器也能打开我！'
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
          text: '“那我们开始吧，虽然我不是驴，但是我正好带着便携计算器，”吉塔侦探说。她开始旋转操控保险箱的数字锁，需要找到一个4位数密码，转到数字7、3和5时她都听到咔嗒声。“嗯，就是如此，”她说着在便携计算器上按了这3个数字。那么第4个数字是什么呢？福生侦探无计可施地看着她，突然他大叫到：“我们真是驴（ESEL），这样我们就知道正确的数字了！”福生侦探看到了什么？完整的数字密码是多少？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '当在便携计算器上打出数字7353，并将计算器倒过来看，就出现了单词ESEL（驴），因此正确的秘密数字就是7353。'
      }]
    }]
  },
  {
    quizId: 31,
    quizType: 2,
    title: '谁是真正的佐罗',
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
          text: '吉塔侦探终于有机会发现佐罗的踪迹，佐罗是可怕的蛤蟆菌犯罪集团的首领，为此她必须破解一张密码纸条。'
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
          text: '这张密码纸条其实是考验犯罪集团新成员的测试题。而测试题的答案就是佐罗的电话号码，只要拨这个号码就可以联系上佐罗，不仅如此，还能够在电话簿上找到佐罗的真实姓名和住址。'
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
          text: '吉塔侦探绞尽脑汁，终于找到了答案。那么，佐罗的电话号码是多少？真名和地址又是什么？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '正确的数字是4437925，是默希尔乌茨·阿尔多的电话号码。他还是佐罗，可怕的蛤蟆菌犯罪集团首领。'
      }]
    }]
  },
  {
    quizId: 32,
    quizType: 2,
    title: '被雪覆盖的雪茄',
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
          text: '一个冬季的早晨，福生侦探到迪利·普法伊弗尔的烟草店买一份报纸，看到老板迪利正激动地叫道：“有人偷走了一盒精制‘班达里诺雪茄’，这是我们最贵的牌子！一定是在8点至8点15分之间发生的，因为那段时间里有个供应商来送新货，我在店外收货！”'
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
          text: '福生侦探安慰了迪利，他还询问了在案发时间内出现在店外街道上的四个人：'
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
          text: '洛拉·施密茨说，她在店里，但是只是迅速地看了一下烟斗。'
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
          text: '李冰·莱克声称他没有进入商店，只是在店外观看了橱窗。'
        },
        {
          blockId: '12',
          blockType: 'return'
        },
        {
          blockId: '13',
          blockType: 'tab'
        },
        {
          blockId: '14',
          blockType: 'normal-text',
          text: '特奥·菲契尔解释说，他根本没有在迪利的店里待过，他只是散步经过而已。'
        },
        {
          blockId: '15',
          blockType: 'return'
        },
        {
          blockId: '16',
          blockType: 'tab'
        },
        {
          blockId: '17',
          blockType: 'normal-text',
          text: '阿格娜丝·洛策尔说，她和每个早晨一样，在迪利那里买口香糖，迪利不在店里，她就把钱放在店里的桌子上了。'
        },
        {
          blockId: '18',
          blockType: 'return'
        },
        {
          blockId: '19',
          blockType: 'tab'
        },
        {
          blockId: '20',
          blockType: 'normal-text',
          text: '有人说谎了，福生侦探已经知道了那个人是谁。出色的观察家同样也能发现，快来试试吧！'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '特奥·菲契尔没说真话，他的鞋印和拐杖在雪地里的痕迹清楚地显示，他不是经过，而是走进了迪利的烟草商店。'
      }]
    }]
  },
  {
    quizId: 33,
    quizType: 2,
    title: '施魏因斯堡瓷器',
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
          text: '吉塔侦探有着狂热的爱好——收集施魏因斯堡瓷器小雕像！迈克瑟·克吕策尔是唯一出售这种瓷器的贸易商，他每周六在黑林恩广场的艺术品市场摆摊。吉塔侦探刚想买一只可爱的小兔子瓷器雕像，但是她突然觉得这个雕刻不是真品，因为作为瓷器而言，它实在太轻了。她的脑中浮起巨大怀疑：这些商品难道是廉价的塑料仿制品？其他顾客也发现了这一欺骗行为，激动的人们越来越多。克吕策尔手忙脚乱地合上他的钱箱，横穿黑林恩广场逃跑了，愤怒的顾客紧跟着他。当一辆车开过后，克吕策尔消失不见了。'
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
          text: '措克夫人在那里大叫：“他一直跑进克策尔隧道里去了！”她指着通往隧道的台阶说：“他从干涸的旧隧道里逃跑了。”'
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
          text: '不过吉塔侦探久经训练的眼睛只观察了几秒，就对措克夫人说：“您的说法不正确，您想把我们从真正的逃跑路线上引开，因为您和克吕策尔是一伙的！ ”请仔细观察图片，哪一点能证明吉塔侦探的推断？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '如果有人从隧道里逃跑，那隧道口的蜘蛛网一定会被破坏，地上的杂草也会被踩扁。'
      }]
    }]
  },
  {
    quizId: 34,
    quizType: 2,
    title: '裤子纽扣的小把戏',
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
          text: '武尔茨格林德林恩正在举办热闹的狂欢节。而福生侦探必须查清一起案件：他被叫到克拉肯酒馆，酒馆老板和装扮成12号囚犯的诺勒在巷子里吵架，老板控诉诺勒在酒馆内用裤子纽扣操控自动游戏机，把整个钱箱都掏空了。诺勒反驳说，他从未在克拉肯酒馆里待过。'
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
          text: '诺勒只穿着背心和囚犯裤子，在寒冷的室外开始打喷嚏，酒店老板把他和福生侦探带进温暖的小酒馆，闷热的室内空气扑面而来。酒店老板指着自动游戏机说：“诺勒在这里玩了一个小时并把游戏机里的钱掏空了，当我想和他说话的时候，他就跑到外面的巷子里去了。”'
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
          text: '“一派胡言，”诺勒反驳，“今天我从未踏入过这家酒馆。”'
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
          text: '福生侦探打量了一下克拉肯酒馆，整个案件一目了然，他要求诺勒说出真相。'
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
          text: '福生侦探为什么知道诺勒说谎了？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '诺勒宣称，从未在克拉肯小酒馆内待过，这是不对的。他在外面只穿着背心，他的12号囚衣在小酒馆里，就挂在小丑左边的椅背上，在此之前他肯定在小酒馆里待过，把衣服挂在那里。'
      }]
    }]
  },
  {
    quizId: 35,
    quizType: 2,
    title: '陌生的床',
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
          text: '皮罗·施托茨有一个怪癖，他喜欢在极其奢华的大床上睡觉，但是这些床并不是他的：每次他都在床垫商店关门前藏进店内，这样晚上他就可以根据自己的喜好, 舒服地享受所有陈列的床垫。皮罗身手十分灵活，第二天一早他总能神不知鬼不觉地悄悄溜走。'
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
          text: '自从一台自动摄像机将他的夜间活动拍摄下之后，吉塔侦探终于知道了皮罗的长相，她的任务就是把皮罗送回他自己的床上去。'
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
          text: '“前一天晚上，皮罗在著名的床之王国专卖店过夜，在那里并没人看到他，但是有线索表明他在那里待过。吉塔在这家商店开门前就等在门口，要逮住皮罗，但是没成功，因为他没有出现。她看到一些商店员工从供货商出口将一些床垫装入货车。“明白了，”她大喊，“这个爱睡觉的家伙可以假装成商店员工跟着送货车回家!”'
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
          text: '那么，吉塔侦探的怀疑正确吗？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '视频录像显示皮罗穿着条形花纹袜子，他的体操鞋放在床头柜上，在图中只有左下角的床垫搬运工穿着同样的鞋子和袜子。吉塔侦探的怀疑完全正确！皮罗·施托茨装扮成床垫搬运工从商店脱身。'
      }]
    }]
  },
  {
    quizId: 36,
    quizType: 2,
    title: '伪造的科勒蒂画像',
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
          text: '在艺术博物馆内，一幅价值连城的著名画家卡洛·科勒蒂的自画像被人从画框里偷走了。福生侦探推测幕后黑手是画家皮诺•罗森布劳，他专门伪造著名画作，并把他的复制品作为原作真品卖给艺术爱好者，牟取暴利。'
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
          text: '当福生侦探来到皮诺的工作室时，他惊讶地发现皮诺已经茫然不知所措，因为他在比较真迹和数量众多的仿制品。第一眼看上去，人们会以为看到了十张一模一样的卡洛·科勒蒂自画像。不过福生侦探很快就认识到，皮诺并不是一开始就能成功地画出完美无缺的仿制品，仔细观察就可以看到小小的不同点，其中只有两幅画是完全一样的。福生侦探立即把这两幅画包起来带走，因为博物馆馆长可以轻而易举地将原作和真品分辨出来。福生侦探必须带走哪两幅画呢？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '完全一致的两幅画分别在最上方一行的中间以及倒数第2行的左侧。'
      }]
    }]
  },
  {
    quizId: 37,
    quizType: 2,
    title: '盈利的魔术',
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
          text: '魔术师阿伯拉·卡伯拉在普福尔琛年度集市上设了一个魔术戏台。在他表演的一个节目中，他采用神秘的方法从观众身上拿走他们的首饰和其他珍贵物品，当然紧接着，他就会开着玩笑将物品还给目瞪口呆的观众，不过这就是他真正的诡计：他只将部分贵重物品归还给观众，这样就没有人怀疑，然后他就将剩下的物品占为己有。'
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
          text: '在此期间，一些诈骗受害者请吉塔侦探帮助他们。在表演魔术时，吉塔侦探没法找到证据，但是她有一个聪明的想法：阿伯拉·卡伯拉在表演结束后肯定要把偷到的物品带到某个地方。于是她悄悄跟踪这个骗子，她的想法十分正确！阿伯拉·卡伯拉来到了声名狼藉的乌鸦酒吧，众所周知，那里是骗子们的聚会点。真糟糕，她在拥挤的人群中找不到他了，那个骗子藏在哪里呢？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '阿伯拉·卡伯拉在酒吧后面的房间里，那里有烟圈升起。阿伯拉·卡伯拉魔术戏台的宣传张贴画显示他也是一名“艺术吸烟者”。'
      }]
    }]
  },
  {
    quizId: 38,
    quizType: 2,
    title: '微型路易斯·菲利普座钟',
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
          text: '钟表收藏家埃尔玛尔·帕茨克向福生和吉塔展示自己微小而精美的收藏品，突然他大叫起来：“路易斯·菲利普不见了！我最珍贵的收藏品就是这台19世纪的微型座钟，尽管它总是走慢10分钟。昨天我还向钟表商人普菲德勒展示了这个座钟，他非常兴奋，要我立即把这台座钟出售给他！”福生沉思着皱起眉头，普菲德勒会发现路易斯·菲利普的时间显示错误吗？人们私下传说，他常常做些不正当的事。'
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
          text: '福生和吉塔侦探承诺调查这件事情，很快他们就来到了普菲德勒的商店，上百个钟表在这个房间里滴答作响。“我们在为我们的叔叔找一只古董钟表。”吉塔侦探说。这样他们就可以安安静静地搜寻路易斯·菲利普座钟，很快两个人互相眨眼示意：看，它就在那里！'
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
          text: '这只座钟藏在哪里？福生和吉塔怎样发现了它？'
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '仔细阅读就会知道微型路易斯·菲利普座钟走慢10分钟。根据普菲得勒钟表店宣传招牌，该商店内的所有钟表均走时准确，他们都显示11点45分，除了路易斯·菲利普座钟，它是唯一显示11点35分的时钟，就在展示柜最下面一层。'
      }]
    }]
  },
  {
    quizId: 39,
    quizType: 2,
    title: '碰头地点小香肠酒吧',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '两个人交换了报纸，磁盘肯定藏在米尔佐的报纸《最新消息》中。'
      }]
    }]
  },
  {
    quizId: 40,
    quizType: 2,
    title: '洛策和大提琴',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '如果像洛策宣称的那样，他根本就不知道那里有大提琴，他在黑暗中也会被绊倒。当他去厨房取灯时，他自动绕开了大提琴，说明正是他把琴放在了那里。'
      }]
    }]
  },
  {
    quizId: 41,
    quizType: 2,
    title: '第3只恐龙蛋',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '的确是助理珀克偷走了第3只恐龙蛋，但是他太愚蠢了，在翻越恐龙展览处的玻璃挡板时竟然把实验室钥匙掉在那里。那把钥匙在图片右侧边缘，就在吉塔侦探边上。'
      }]
    }]
  },
  {
    quizId: 47,
    quizType: 2,
    title: '月光下的访客',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '这个潜入者是克里莫·卡茨，从他的大眼睛、招风耳和帽子可以认出他，照片中他将帽子拿在手里。事实上他想知道乔什么时候到达，并想偷一块月亮岩石。'
      }]
    }]
  },
  {
    quizId: 48,
    quizType: 2,
    title: '小广告',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
          blockId: '1',
          blockType: 'normal-text',
          text: '这则广告是发给犯罪集团成员的密码召集令，具体内容如下：'
        },
        {
          blockId: '2',
          blockType: 'return'
        },
        {
          blockId: '3',
          blockType: 'normal-text',
          text: '克利普 - 克里普 - 集团重要通知！所有集团成员。本周三晚上 19:30在蓝牛附近的 旅馆碰头。 李冰的最新供货到了！没有到场 的人，必将一无所得。 集团首领'
        }
      ]
    }]
  },
  {
    quizId: 49,
    quizType: 2,
    title: '克勒顿福斯宫殿发生了什么？',
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
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '钥匙I打开1号锁。钥匙Q打开2号锁。钥匙L打开3号锁。钥匙B打开4号锁。'
      }]
    }]
  },
  {
    quizId: 50,
    quizType: 2,
    title: '假冒警察',
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
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '那个假冒警察在从前向后数第六排，即那位戴着太阳镜的女士对着的那一排，从左向右数第二个警察。'
      }]
    }]
  },
  {
    quizId: 51,
    quizType: 2,
    title: '咖啡馆伪君子',
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
        url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/jqe6qijt.jpg',
        height: 524.5
      }
    },
    answerArea: {
      x: 216,
      y: 140
    },
    solutions: [{
      solutionTag: '解析',
      align: 'left',
      solutionData: [{
        blockId: '1',
        blockType: 'normal-text',
        text: '福尔克尔·德姆里希肯定知道克洛普夫咖啡馆而且一定也去过那里，因为他把那家咖啡馆的火柴带回了家，吉塔侦探看到这包火柴就在插图右下角的小桌子上。'
      }]
    }]
  },
  {
    quizId: 52,
    quizType: 2,
    title: '事关拳击手套的小睡',
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
    quizId: 53,
    quizType: 2,
    title: '混乱的停车场',
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
    quizId: 54,
    quizType: 2,
    title: '啊哈，你喜欢比萨',
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
    quizId: 55,
    quizType: 2,
    title: '失踪的猪松鼠',
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
    quizId: 56,
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
    quizId: 57,
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
    quizId: 58,
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
    quizId: 59,
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
    quizId: 60,
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