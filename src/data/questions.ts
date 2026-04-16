import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "面对突如其来的背叛与深渊，你的第一反应是？",
    options: [
      { text: "绝对的掌控与反击，将背叛者踩在脚下。", scores: { DOM: 3, VIT: 2, MOR: 1 } },
      { text: "表面平静接受，内心却在筹谋同归于尽的死局。", scores: { TRA: 3, MOR: 2, AFF: -1 } },
      { text: "痛苦但依然坚守底线，试图寻找真相与救赎。", scores: { LOY: 3, MOR: -2, TRA: 1 } },
      { text: "封闭自我，将所有情绪与过往一同埋葬在冰层之下。", scores: { TRA: 3, VIT: -2, AFF: -2 } },
      { text: "以暴制暴，哪怕双手沾满鲜血也要撕裂黑暗。", scores: { DOM: 2, MOR: 3, VIT: 2 } }
    ]
  },
  {
    id: 2,
    text: "在一段极致的亲密关系中，你更渴望得到什么？",
    options: [
      { text: "毫无保留的偏爱与热烈直白的回应。", scores: { AFF: 3, VIT: 2, DOM: 1 } },
      { text: "灵魂深处的共鸣，哪怕隔着生死与谎言也能互相理解。", scores: { LOY: 3, TRA: 2, AFF: 1 } },
      { text: "绝对的占有，将对方完全纳入自己的保护与掌控之中。", scores: { DOM: 3, AFF: 2, MOR: 1 } },
      { text: "一个可以让我卸下所有防备、安心闭上眼睛的避风港。", scores: { TRA: 3, VIT: -1, AFF: 2 } },
      { text: "势均力敌的博弈，在试探与交锋中确认彼此的唯一。", scores: { DOM: 2, VIT: 2, AFF: 1 } }
    ]
  },
  {
    id: 3,
    text: "如果你的信仰与你最爱的人发生不可调和的冲突？",
    options: [
      { text: "我会为了他背叛全世界，哪怕坠入地狱。", scores: { AFF: 3, LOY: -2, MOR: 3 } },
      { text: "我会选择信仰，然后陪他一起死。", scores: { LOY: 3, TRA: 2, AFF: 2 } },
      { text: "用尽一切强硬手段，逼迫局势改变，两者我都要。", scores: { DOM: 3, VIT: 2, MOR: 2 } },
      { text: "在痛苦中隐忍，默默为他铺好退路，自己承担所有罪责。", scores: { TRA: 3, LOY: 2, AFF: 2 } },
      { text: "我相信他，我们会一起在绝境中杀出一条血路。", scores: { VIT: 3, LOY: 2, DOM: 1 } }
    ]
  },
  {
    id: 4,
    text: "你如何处理自己内心深处无法愈合的创伤？",
    options: [
      { text: "化作燃烧的怒火与生命力，绝不向命运低头。", scores: { VIT: 3, DOM: 2, TRA: -1 } },
      { text: "用冷漠和理智层层包裹，仿佛那具躯壳不是自己的。", scores: { TRA: 3, VIT: -2, AFF: -2 } },
      { text: "在深夜里独自舔舐伤口，白天依然是无坚不摧的模样。", scores: { DOM: 2, TRA: 2, LOY: 1 } },
      { text: "用偏执和疯狂来掩饰恐惧，只要我足够强就没人能伤害我。", scores: { DOM: 3, TRA: 2, MOR: 2 } },
      { text: "等待那个能牵着我的手，带我走出泥沼的人。", scores: { AFF: 3, TRA: 2, VIT: 1 } }
    ]
  },
  {
    id: 5,
    text: "在团队或群体中，你通常扮演怎样的角色？",
    options: [
      { text: "绝对的领导者，发号施令，掌控全局。", scores: { DOM: 3, VIT: 2, LOY: 1 } },
      { text: "隐于幕后的智囊，冷眼旁观，一击致命。", scores: { DOM: 1, VIT: -2, TRA: 1 } },
      { text: "冲锋陷阵的利刃，只要有目标就会不顾一切。", scores: { VIT: 3, LOY: 2, MOR: 1 } },
      { text: "游离于边缘的独狼，不轻易信任，但一旦承诺便至死不渝。", scores: { LOY: 3, TRA: 2, AFF: -1 } },
      { text: "维系团队的粘合剂，看似随性实则重情重义。", scores: { AFF: 2, VIT: 2, LOY: 2 } }
    ]
  },
  {
    id: 6,
    text: "为了达到一个绝对正义或必须完成的目的，你的底线在哪里？",
    options: [
      { text: "恪守程序与道德，正义必须以正义的方式实现。", scores: { MOR: -3, LOY: 2, DOM: -1 } },
      { text: "可以游走在灰色地带，但绝不伤及无辜。", scores: { MOR: 1, LOY: 2, VIT: 1 } },
      { text: "只要结果是好的，我不介意双手沾满鲜血，背负骂名。", scores: { MOR: 3, TRA: 2, DOM: 2 } },
      { text: "底线？我的意志就是底线，挡我者死。", scores: { DOM: 3, MOR: 3, VIT: 2 } },
      { text: "为了保护我珍视的人，我可以随时抛弃所有底线。", scores: { AFF: 3, MOR: 3, LOY: -1 } }
    ]
  },
  {
    id: 7,
    text: "在一个完全放松的夜晚，你最可能的状态是？",
    options: [
      { text: "享受奢华与喧嚣，开着跑车或在人群中释放精力。", scores: { VIT: 3, DOM: 1, TRA: -2 } },
      { text: "独自一人在昏暗的房间里抽烟，凝视虚空。", scores: { TRA: 3, VIT: -2, AFF: -1 } },
      { text: "和爱人紧紧相拥，享受难得的平静与温存。", scores: { AFF: 3, LOY: 2, TRA: -1 } },
      { text: "依然保持警惕，复盘白天的局势，规划下一步。", scores: { DOM: 2, TRA: 1, VIT: -1 } },
      { text: "做一些极度危险或刺激的事来确认自己还活着。", scores: { MOR: 2, TRA: 2, VIT: 2 } }
    ]
  },
  {
    id: 8,
    text: "当你意识到自己可能永远失去某个人时，你会？",
    options: [
      { text: "发疯般地挽留，哪怕用强权和锁链也要把他留在身边。", scores: { DOM: 3, AFF: 3, MOR: 2 } },
      { text: "表面不动声色，内心却已经跟着他死了一次。", scores: { TRA: 3, AFF: 2, VIT: -2 } },
      { text: "倾尽所有，哪怕逆天改命、对抗全世界也要把他抢回来。", scores: { VIT: 3, DOM: 2, LOY: 2 } },
      { text: "静静地看着他走，把所有的爱意和痛苦咽下，独自承受。", scores: { TRA: 2, AFF: -1, LOY: 2 } },
      { text: "如果他想要自由，我给他自由，但我会永远在暗处守着他。", scores: { LOY: 3, AFF: 2, DOM: -1 } }
    ]
  },
  {
    id: 9,
    text: "别人对你的第一印象通常是？",
    options: [
      { text: "张扬、耀眼、极具攻击性与压迫感。", scores: { VIT: 3, DOM: 3, TRA: -1 } },
      { text: "清冷、疏离、高深莫测，仿佛没有感情的机器。", scores: { TRA: 2, VIT: -2, AFF: -2 } },
      { text: "优雅、从容、带着上位者的矜贵与危险。", scores: { DOM: 3, MOR: 1, VIT: 1 } },
      { text: "沉默寡言、阴郁、像一头随时会暴起的孤狼。", scores: { TRA: 3, MOR: 2, AFF: -1 } },
      { text: "看似玩世不恭或温和无害，实则深不可测。", scores: { MOR: 2, DOM: 1, VIT: 1 } }
    ]
  },
  {
    id: 10,
    text: "面对曾经给你带来巨大痛苦的人或事，现在的你会？",
    options: [
      { text: "彻底碾碎他们，让他们付出千百倍的代价。", scores: { DOM: 3, MOR: 2, VIT: 2 } },
      { text: "那些痛苦已经成为我骨血的一部分，我带着它们继续前行。", scores: { TRA: 3, LOY: 2, VIT: 1 } },
      { text: "只要他们不再触碰我的底线，我可以冷漠地无视。", scores: { DOM: 1, TRA: 1, MOR: -1 } },
      { text: "在暗中布下天罗地网，看着他们一步步走向毁灭。", scores: { MOR: 3, DOM: 2, TRA: 1 } },
      { text: "因为遇到了救赎我的人，我已经可以笑着谈起那些过往。", scores: { AFF: 3, VIT: 2, TRA: -2 } }
    ]
  },
  {
    id: 11,
    text: "你认为爱情的本质是什么？",
    options: [
      { text: "是绝对的占有、臣服与不可分割。", scores: { DOM: 3, AFF: 3, MOR: 1 } },
      { text: "是黑暗中唯一的光，是哪怕粉身碎骨也要抓住的救命稻草。", scores: { TRA: 3, AFF: 2, LOY: 2 } },
      { text: "是并肩作战，是把后背交给对方的绝对信任。", scores: { LOY: 3, VIT: 2, DOM: 1 } },
      { text: "是隐忍、克制，是只要他好，我怎样都无所谓。", scores: { TRA: 2, AFF: -2, LOY: 3 } },
      { text: "是热烈燃烧的火焰，是毫无保留的倾其所有。", scores: { VIT: 3, AFF: 3, DOM: 2 } }
    ]
  },
  {
    id: 12,
    text: "当你处于绝对的劣势或绝境时，支撑你活下去的是？",
    options: [
      { text: "不甘屈服的傲骨和对胜利的极度渴望。", scores: { DOM: 3, VIT: 3, TRA: -1 } },
      { text: "一个未完成的承诺，或是一个还在等我的人。", scores: { LOY: 3, AFF: 2, TRA: 1 } },
      { text: "对仇人的刻骨恨意，我必须活下去看着他们死。", scores: { MOR: 3, TRA: 2, VIT: 2 } },
      { text: "习惯性的麻木与本能的求生欲，哪怕活得像鬼。", scores: { TRA: 3, VIT: -2, MOR: 2 } },
      { text: "心中的信仰与底线，哪怕死也要死得干净。", scores: { LOY: 3, MOR: -3, DOM: 1 } }
    ]
  },
  {
    id: 13,
    text: "如果用一种意象来形容你的灵魂？",
    options: [
      { text: "烈日骄阳，燃烧一切阴霾。", scores: { VIT: 3, DOM: 2, TRA: -2 } },
      { text: "深渊寒冰，看似坚不可摧实则冰冷刺骨。", scores: { TRA: 3, VIT: -2, AFF: -2 } },
      { text: "出鞘利刃，带着血腥气与不屈的锋芒。", scores: { DOM: 2, MOR: 2, VIT: 2 } },
      { text: "暗夜星辰，在最深的黑暗中依然坚守微光。", scores: { LOY: 3, TRA: 1, MOR: -1 } },
      { text: "燎原野火，疯狂、热烈、充满毁灭与重生的力量。", scores: { VIT: 3, MOR: 2, AFF: 2 } }
    ]
  },
  {
    id: 14,
    text: "面对权力与掌控的诱惑，你的态度是？",
    options: [
      { text: "天生就该属于我，我享受将一切握在手中的感觉。", scores: { DOM: 3, VIT: 2, MOR: 1 } },
      { text: "权力只是工具，为了保护我想保护的人，我必须握住它。", scores: { LOY: 2, DOM: 2, AFF: 2 } },
      { text: "毫无兴趣，我只在乎我内心的秩序与安宁。", scores: { DOM: -2, TRA: 1, MOR: -1 } },
      { text: "警惕且厌恶，因为我曾深受其害。", scores: { TRA: 3, DOM: -1, MOR: -2 } },
      { text: "如果能让我达到目的，我不介意成为权力的怪物。", scores: { MOR: 3, DOM: 3, TRA: 1 } }
    ]
  },
  {
    id: 15,
    text: "走到生命的尽头，你希望留在世人眼中的是一个怎样的你？",
    options: [
      { text: "一个不可战胜的传奇，一个永远的上位者。", scores: { DOM: 3, VIT: 2, TRA: -1 } },
      { text: "世人怎么看无所谓，只要那个人记得我就好。", scores: { AFF: 3, LOY: 2, DOM: -1 } },
      { text: "一个清白、干净，完成了所有使命的人。", scores: { LOY: 3, MOR: -3, TRA: 1 } },
      { text: "一个终于可以闭上眼睛，获得长久安宁的灵魂。", scores: { TRA: 3, VIT: -2, AFF: -1 } },
      { text: "一个轰轰烈烈爱过、恨过、活过，没有遗憾的疯子。", scores: { VIT: 3, MOR: 2, AFF: 2 } }
    ]
  }
];
