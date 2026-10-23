import type { Localized } from './types'

export type ChoirPerformance = {
  id: string
  title: string
  eyebrow: string
  date: string
  venue: string
  host: string
  repertoire?: string
  description: string[]
  photos: Array<{
    url: string
    caption: string
  }>
}

export type ChoirPillar = {
  key: string
  title: string
  summary: string
}

export type ChoirContent = {
  hero: {
    eyebrow: string
    title: string
    paragraphs: string[]
    action: string
  }
  sectionsNav: Array<{
    id: string
    label: string
  }>
  programsOverview: {
    title: string
    subtitle: string
    parentChild: {
      eyebrow: string
      title: string
      summary: string
      features: string[]
      action: string
      actionHref: string
    }
    childrensChoir: {
      eyebrow: string
      title: string
      summary: string
      features: string[]
      action: string
      actionHref: string
    }
  }
  program: {
    eyebrow: string
    title: string
    paragraphs: string[]
    items: string[]
  }
  participation: {
    title: string
    text: string
  }
  childrensChoir: {
    eyebrow: string
    title: string
    paragraphs: string[]
    items: string[]
    highlight: {
      eyebrow: string
      title: string
      text: string
    }
    galleryTitle: string
    gallery: Array<{
      url: string
      caption: string
    }>
  }
  childrensChoirPage: {
    eyebrow: string
    title: string
    subtitle: string
    lead: string
    intro: {
      eyebrow: string
      title: string
      paragraphs: string[]
    }
    pillarsEyebrow: string
    pillarsTitle: string
    pillars: ChoirPillar[]
    performancesEyebrow: string
    performancesTitle: string
    performancesSubtitle: string
    performances: ChoirPerformance[]
    cta: {
      eyebrow: string
      title: string
      text: string
      action: string
    }
    backAction: string
  }
  labels: {
    aboutProgram: string
    jumpToSection: string
    repertoire: string
    dateAndVenue: string
    host: string
    performanceMoments: string
  }
  upcoming: {
    eyebrow: string
    title: string
    rows: Array<{ label: string; value: string }>
  }
  cta: {
    title: string
    text: string
    action: string
  }
  detailsAction: string
}

export const choirContent: Localized<ChoirContent> = {
  en: {
    hero: {
      eyebrow: 'Choir programs',
      title: 'SAIMA Choirs: Harmony Across Generations',
      paragraphs: [
        'Through our Parent-Child Choir and SAIMA Children’s Choir, SAIMA brings families and aspiring young vocalists together to share the joy of choral singing, vocal artistry, teamwork, and multicultural community performance.',
      ],
      action: 'Register interest',
    },
    sectionsNav: [
      { id: 'parent-child-choir', label: 'Parent-Child Choir' },
      { id: 'childrens-choir', label: 'SAIMA Children’s Choir' },
    ],
    programsOverview: {
      title: 'Our Choral Programs',
      subtitle: 'Two dedicated pathways celebrating the power of song — for families connecting through music, and for young singers pursuing vocal excellence and live stagecraft.',
      parentChild: {
        eyebrow: 'Family music program',
        title: 'Parent-Child Choir',
        summary: 'Brings children and parents together through singing, rehearsal, performance, and shared musical experience. Rather than focusing only on individual performance, this program values family connection, confidence, teamwork, and the joy of making music together.',
        features: [
          'Shared singing for children and parents',
          'Supportive rehearsal and performance experience',
          'Family connection, cultural participation, and community friendship',
        ],
        action: 'Learn about Parent-Child Choir',
        actionHref: '#parent-child-choir',
      },
      childrensChoir: {
        eyebrow: 'Youth vocal ensemble',
        title: 'SAIMA Children’s Choir',
        summary: 'A dedicated choral training program for young singers aged 6 to 16. Combines rigorous vocal coaching, ensemble harmony, and cross-cultural repertoire with premier performance opportunities at diplomatic receptions and formal concert halls.',
        features: [
          'Comprehensive musical development & healthy vocal technique',
          'Featured appearances at diplomatic, civic & gala concert stages',
          'Rich multicultural repertoire celebrating diverse heritage and global harmony',
        ],
        action: 'Explore SAIMA Children’s Choir',
        actionHref: '/choir-children',
      },
    },
    program: {
      eyebrow: 'Family program',
      title: 'Parent-Child Choir Program',
      paragraphs: [
        'The Parent-Child Choir is a newly established community music program of South Australian International Musicians Association. It brings children and parents together through singing, rehearsal, performance, and shared musical experience.',
        'The choir was created to encourage families to enjoy music together. Rather than focusing only on individual performance, this program values participation, connection, confidence, teamwork, and the joy of making music as a family.',
        'Through the Parent-Child Choir, children sing alongside their parents and other families in a supportive community environment. The program helps children develop musical skills, listening, confidence, and stage experience, while also giving parents the opportunity to share meaningful artistic moments with their children.',
        'Although the choir is still in its early stage, it has already participated in a community event hosted by the Jiangsu Chamber of Commerce to welcome a visiting Malaysian business delegation. This performance offered the choir its first public community appearance and marked an important beginning for the program.',
        'The Parent-Child Choir is also preparing to participate in an upcoming Mid-Autumn Festival community celebration. Through future performances, the choir hopes to continue building family connection, cultural participation, and community friendship through music.',
      ],
      items: [
        'Shared singing for children and parents',
        'Supportive rehearsal and performance experience',
        'Family connection, cultural participation, and community friendship',
      ],
    },
    participation: {
      title: 'Parent-Child Participation',
      text: 'Families can register interest and discuss the next rehearsal or community performance opportunity with SAIMA.',
    },
    childrensChoir: {
      eyebrow: 'Youth vocal ensemble',
      title: 'SAIMA Children’s Choir Program',
      paragraphs: [
        'The SAIMA Children’s Choir offers dedicated choral training and formal stage performance experience for young singers across South Australia. Guided by experienced vocal educators, choristers develop healthy vocal technique, ensemble harmony, active listening, and expressive stage presence.',
        'Our repertoire bridges diverse cultural traditions, helping young performers connect with both classical and multicultural music while building confidence, discipline, and camaraderie.',
        'The Children’s Choir regularly represents SAIMA at major cultural, diplomatic, and community celebrations — including their featured performance at the Consulate-General of the People’s Republic of China in Adelaide’s reception celebrating the 77th Anniversary of the founding of the People’s Republic of China, and live stage appearances at SAIMA gala concerts.',
      ],
      items: [
        'Structured vocal coaching, ensemble harmony, and stagecraft for children',
        'Featured performances at major cultural, diplomatic, and concert events',
        'Building musical confidence, cross-cultural understanding, and lasting friendships',
      ],
      highlight: {
        eyebrow: 'Performance Spotlight',
        title: '77th Anniversary National Day Reception',
        text: 'Invited to perform for the Consulate-General of the People’s Republic of China in Adelaide on 29 September 2026, our young choristers performed *盛世星河*, sharing music of friendship, cultural dialogue, and celebration on stage.',
      },
      galleryTitle: 'Children’s Choir Moments',
      gallery: [
        {
          url: '/images/saima/choir.jpg',
          caption: 'SAIMA Children’s Choir performing on stage before the Australian and Chinese national flags',
        },
        {
          url: '/images/saima/choir1.jpg',
          caption: 'Featured performance at the 77th Anniversary Reception hosted by the Consulate-General of China in Adelaide',
        },
        {
          url: '/images/saima/choir2.jpeg',
          caption: 'Young choristers celebrating together in concert attire and panda headbands after their performance',
        },
      ],
    },
    childrensChoirPage: {
      eyebrow: 'Youth Vocal Ensemble',
      title: 'SAIMA Children’s Choir',
      subtitle: 'Nurturing vocal artistry, stage confidence, and multicultural understanding for young singers across South Australia.',
      lead: 'The SAIMA Children’s Choir provides dedicated choral training and formal stage performance experience for young vocalists aged 6 to 16. Guided by experienced choral educators, choristers develop healthy vocal technique, ensemble harmony, and expressive stagecraft while sharing music of friendship, cultural heritage, and unity.',
      intro: {
        eyebrow: 'Our Vision & Training',
        title: 'A Comprehensive Choral Journey for Young Vocalists',
        paragraphs: [
          'The SAIMA Children’s Choir is committed to offering young singers in South Australia a supportive yet artistically rigorous choral education. We believe that choral singing is not only an art form, but also a transformative vehicle for personal confidence, disciplined teamwork, and cross-cultural empathy.',
          'Weekly rehearsals focus on age-appropriate vocal production, ear training, multi-part harmony, and active stage presence. Our conductors guide every child with patience and expertise, ensuring their vocal growth is grounded in healthy vocal habits and joyful artistic expression.',
          'Rather than keeping performance within the rehearsal room, the choir prioritizes real-world stage opportunities. Choristers have the unique privilege of performing at high-profile diplomatic receptions, civic festivals, and major concert halls alongside accomplished international musicians.',
        ],
      },
      pillarsEyebrow: 'Core Foundations',
      pillarsTitle: 'Musical Development, Technique & Cultural Heritage',
      pillars: [
        {
          key: 'musical-development',
          title: 'Musical Development',
          summary: 'Developing ear training, pitch accuracy, rhythmic agility, sight-singing, and multi-part harmonic awareness through interactive musicianship practice.',
        },
        {
          key: 'vocal-training',
          title: 'Vocal Training & Technique',
          summary: 'Systematic instruction in diaphragmatic breath control, open resonance, clear diction, expressive phrasing, and lifelong vocal health.',
        },
        {
          key: 'performance-opportunities',
          title: 'Performance Opportunities',
          summary: 'Direct exposure to formal concert halls, diplomatic celebrations, community festivals, and civic events, building poise, discipline, and stagecraft.',
        },
        {
          key: 'cultural-diversity',
          title: 'Commitment to Cultural Diversity',
          summary: 'A distinctive bilingual and multicultural repertoire celebrating Chinese cultural heritage, Western classical traditions, and international songs of peace.',
        },
      ],
      performancesEyebrow: 'Live Performances',
      performancesTitle: 'Actual Performances & Stage Achievements',
      performancesSubtitle: 'Explore our young choristers’ real-world stage milestones, from diplomatic celebrations to major concert hall presentations.',
      performances: [
        {
          id: 'national-day-20260929',
          title: '77th Anniversary National Day Reception',
          eyebrow: 'Diplomatic Reception Performance',
          date: '29 September 2026',
          venue: 'Adelaide, South Australia',
          host: 'Consulate-General of the People’s Republic of China in Adelaide',
          repertoire: '《盛世星河》 (River of Stars / Galaxy of Splendour)',
          description: [
            'On 29 September 2026, the SAIMA Children’s Choir was invited as the featured youth performance group at the official reception celebrating the 77th Anniversary of the founding of the People’s Republic of China, hosted by the Consulate-General of China in Adelaide.',
            'Holding glowing star lights in their hands, our young singers delivered an inspiring and heartfelt live performance of *盛世星河*. Their pure tone and harmonious blend captivated the audience, symbolizing youthful hope, cross-cultural friendship, and peaceful international dialogue.',
            'The performance received widespread praise from diplomatic representatives, civic dignitaries, and community leaders in attendance, marking a proud milestone for our young choir.',
          ],
          photos: [
            {
              url: '/images/saima/choir1.jpg',
              caption: 'Choristers singing with glowing star lights in front of the official 77th Anniversary National Day backdrop.',
            },
            {
              url: '/images/saima/choir.jpg',
              caption: 'The Children’s Choir on stage before the Australian and Chinese flags, sharing a message of cultural harmony.',
            },
            {
              url: '/images/saima/choir2.jpeg',
              caption: 'Young singers in concert attire and panda headbands celebrating their successful diplomatic reception performance.',
            },
          ],
        },
        {
          id: 'gala-concert-20261016',
          title: 'SAIMA Gala Concert Live Stage Showcase',
          eyebrow: 'Major Concert Hall Appearance',
          date: '16 October 2026',
          venue: 'Adelaide Concert Stage, South Australia',
          host: 'South Australian International Musicians Association (SAIMA)',
          repertoire: 'Choral Repertoire & Featured Solo Showcases',
          description: [
            'On 16 October 2026, the SAIMA Children’s Choir took the formal concert hall stage before an enthusiastic full-house audience of music lovers and community supporters in Adelaide.',
            'Under professional stage lighting with large-scale scenic projections and stage microphones, the children presented a diverse repertoire of multi-part choral harmonies and featured youth vocal solos, showcasing their disciplined blend and expressive musicality.',
            'Following the performance, the choristers were invited back to the stage alongside SAIMA leadership, esteemed dignitaries, and professional guest artists for a commemorative celebration of young artistic achievement.',
          ],
          photos: [
            {
              url: '/images/saima/choir-performances/20261016-stage.jpg',
              caption: 'The full Children’s Choir lineup performing live on the Adelaide concert stage with microphones and scenic mountain projection.',
            },
            {
              url: '/images/saima/choir-performances/20261016-singing.jpg',
              caption: 'Choristers singing with focused technique, expressive phrasing, and shared ensemble discipline.',
            },
            {
              url: '/images/saima/choir-performances/20261016-choir-group.jpg',
              caption: 'The SAIMA Children’s Choir assembled on stage in front of the SAIMA emblem.',
            },
            {
              url: '/images/saima/choir-performances/20261016-dignitaries.jpg',
              caption: 'Young choristers joined on stage by distinguished guests, dignitaries, and fellow musicians in celebratory recognition.',
            },
          ],
        },
      ],
      cta: {
        eyebrow: 'Audition & Enrollment',
        title: 'Join the SAIMA Children’s Choir',
        text: 'We welcome young vocalists aged 6 to 16 who love to sing. Experience weekly coaching, masterclasses, and prestigious concert stage performances with South Australia’s leading multicultural youth choir.',
        action: 'Register for Audition / Inquiry',
      },
      backAction: 'Back to Choir Programs',
    },
    labels: {
      aboutProgram: 'About the program',
      jumpToSection: 'Explore our choirs',
      repertoire: 'Repertoire',
      dateAndVenue: 'Date & Location',
      host: 'Presented By / Host',
      performanceMoments: 'Performance Moments',
    },
    upcoming: {
      eyebrow: 'Looking forward',
      title: 'Mid-Autumn Festival community celebration',
      rows: [
        { label: 'Timing', value: 'To be announced' },
        { label: 'Place', value: 'To be announced' },
      ],
    },
    cta: {
      title: 'Your family’s musical journey starts here.',
      text: 'Whether joining as a family in our Parent-Child Choir or enrolling a young singer in our Children’s Choir, send SAIMA a note and we will follow up with the next rehearsal opportunity.',
      action: 'Register interest',
    },
    detailsAction: 'Read choir details',
  },
  zh: {
    hero: {
      eyebrow: '合唱项目',
      title: 'SAIMA 合唱团：声乐之美·跨越世代',
      paragraphs: [
        '通过亲子合唱团与 SAIMA 儿童合唱团两大特色项目，南澳国际音乐协会将家庭与青少年歌者紧密相连，在排练与舞台演出中共同体验合唱艺术、团队协作、跨文化交流与社区参与的快乐。',
      ],
      action: '登记意向',
    },
    sectionsNav: [
      { id: 'parent-child-choir', label: '亲子合唱团' },
      { id: 'childrens-choir', label: 'SAIMA 儿童合唱团' },
    ],
    programsOverview: {
      title: '两大特色合唱项目',
      subtitle: '我们提供两条清晰的合唱成长路径：以家庭陪伴与艺术启蒙为主的亲子合唱团，以及专注于系统声乐训练与正式舞台实践的 SAIMA 儿童合唱团。',
      parentChild: {
        eyebrow: '家庭音乐项目',
        title: '亲子合唱团',
        summary: '亲子合唱团是南澳国际音乐协会新近成立的社区音乐项目。该项目通过歌唱、排练、演出和共同的音乐体验，将孩子与家长连接在一起。鼓励家庭共同参与音乐，重视参与、连接、自信、合作，以及一家人共同创造音乐的快乐。',
        features: [
          '孩子与家长共同歌唱与陪伴成长',
          '温馨包容的排练氛围与社区演出体验',
          '增进亲子情感、文化参与与社区友谊',
        ],
        action: '了解亲子合唱团',
        actionHref: '#parent-child-choir',
      },
      childrensChoir: {
        eyebrow: '少儿声乐合唱',
        title: 'SAIMA 儿童合唱团',
        summary: '为南澳 6 至 16 岁热爱歌唱的少年儿童打造的专业少儿合唱团。在资深声乐导师指导下系统学习科学发声、多声部和声与舞台台风，融合中西多元文化曲目，亮相高规格外交庆典与大型音乐会。',
        features: [
          '系统的音乐素养训练与科学健康发声指导',
          '常态化受邀参演重要外交招待会与音乐厅专场演出',
          '兼收并蓄中外经典与多元文化曲目，培养国际视野',
        ],
        action: '了解 SAIMA 儿童合唱团',
        actionHref: '/choir-children',
      },
    },
    program: {
      eyebrow: '家庭音乐项目',
      title: '亲子合唱团项目',
      paragraphs: [
        '亲子合唱团是南澳国际音乐协会新近成立的社区音乐项目。该项目通过歌唱、排练、演出和共同的音乐体验，将孩子与家长连接在一起。',
        '亲子合唱团的成立，是希望鼓励家庭共同参与音乐。这个项目并不只关注个人表演能力，而是重视参与、连接、自信、合作，以及一家人共同创造音乐的快乐。',
        '在亲子合唱团中，孩子们与父母以及其他家庭一起，在支持性的社区环境中共同歌唱。这个项目帮助孩子发展音乐能力、聆听能力、自信心和舞台经验，也为家长提供了与孩子共同经历艺术时刻的机会。',
        '虽然亲子合唱团目前仍处于成立初期，但已经参加了由江苏商会举办的迎接马来西亚商团的社区活动。这次演出是亲子合唱团第一次公开社区亮相，也标志着该项目的重要开始。',
        '亲子合唱团也正在准备参加即将举办的中秋节社区联欢会。通过未来更多演出，我们希望继续通过音乐促进家庭连接、文化参与与社区友谊。',
      ],
      items: [
        '孩子与家长共同歌唱',
        '支持性的排练与演出体验',
        '家庭连接、文化参与与社区友谊',
      ],
    },
    participation: {
      title: '亲子合唱团参与方式',
      text: '家庭可以登记意向，并与 SAIMA 沟通下一次排练或社区演出机会。',
    },
    childrensChoir: {
      eyebrow: '少儿声乐合唱',
      title: 'SAIMA 儿童合唱团项目',
      paragraphs: [
        'SAIMA 儿童合唱团为南澳热爱歌唱的少年儿童提供系统的合唱训练与正式舞台演出机会。在专业声乐导师的指导下，小团员们学习科学的发声方法、多声部合唱配合、敏锐的音乐聆听以及自信的舞台表现力。',
        '合唱团曲目融合中西多元文化传统，帮助孩子们在音乐学习中拓宽文化视野，培养专注力、团队精神与艺术感染力。',
        '儿童合唱团多次代表 SAIMA 亮相重要文化与外交盛会——包括受邀参加中国驻阿德莱德总领事馆举办的庆祝中华人民共和国成立77周年招待会演出，展现南澳华裔及多元文化青少年的艺术风采。',
      ],
      items: [
        '专业系统的少儿声乐指导、和声训练与舞台表演培养',
        '受邀参演重要外交庆典、多元文化活动及专场音乐会',
        '在音乐中培养自信心、跨文化理解与深厚的同龄友谊',
      ],
      highlight: {
        eyebrow: '演出特写',
        title: '庆祝中华人民共和国成立77周年招待会演出',
        text: '2026年9月29日，SAIMA 儿童合唱团受邀在中国驻阿德莱德总领事馆举办的国庆77周年招待会上倾情献唱《盛世星河》，用纯真动人的歌声传递友谊与文化共鸣。',
      },
      galleryTitle: '儿童合唱团演出掠影',
      gallery: [
        {
          url: '/images/saima/choir.jpg',
          caption: 'SAIMA 儿童合唱团在中澳两国国旗前倾情献唱',
        },
        {
          url: '/images/saima/choir1.jpg',
          caption: '受邀参演中国驻阿德莱德总领事馆庆祝中华人民共和国成立77周年招待会',
        },
        {
          url: '/images/saima/choir2.jpeg',
          caption: '演出圆满结束后，身着演出服与熊猫头饰的小团员们在现场欢聚留念',
        },
      ],
    },
    childrensChoirPage: {
      eyebrow: '少儿声乐合唱',
      title: 'SAIMA 儿童合唱团',
      subtitle: '立足音乐素养，塑造艺术品质，用清澈童声连接多元文化',
      lead: 'SAIMA 儿童合唱团致力于为南澳 6 至 16 岁少年儿童提供专业、系统的声乐与合唱艺术教育。在资深声乐教育家与指挥的悉心带领下，孩子们不仅学习科学发声、和声配合与舞台表演，更在多元文化交流中树立自信、收获深厚友谊，成长为具有广阔视野的新时代少年歌者。',
      intro: {
        eyebrow: '教育理念与培养特色',
        title: '专业·启发·融通：打造高品质少儿合唱教育',
        paragraphs: [
          'SAIMA 儿童合唱团汇聚了南澳各族裔的热爱声乐的优秀青少年。我们坚信，合唱艺术不仅是声音的共鸣，更是心灵与品格的淬炼。合唱团课程立足于全方位的少儿音乐素养提升，注重启发孩子对音乐本真的热爱与敏锐表达。',
          '在日常排练中，专业导师团队从少儿生理特点出发，注重科学发声方法的建立与呼吸支持，保护青少年稚嫩声带；同时引入多声部视唱练耳与和声训练，让孩子们学会倾听彼此，在和谐的声部平衡中体验合唱艺术的严谨与震撼。',
          '合唱团紧密依托南澳国际音乐协会丰富的国际艺术与外交资源，跳出传统排练教室的局限，让小团员们常态化登上高规格外交招待会、大型音乐厅专场演出及多元文化庆典，在实战舞台上历练自信从容的台风与卓越表现力。',
        ],
      },
      pillarsEyebrow: '核心培养支柱',
      pillarsTitle: '音乐素养·专业发声·舞台实践·文化传承',
      pillars: [
        {
          key: 'musical-development',
          title: '音乐素养全面发展',
          summary: '系统开展视唱练耳、节奏律动、多声部听觉与乐理知识训练，建立敏锐的音乐感知力与扎实的读谱能力。',
        },
        {
          key: 'vocal-training',
          title: '科学专业声乐训练',
          summary: '资深声乐导师悉心指导，重点训练横膈膜气息支持、共鸣位置建立、清晰咬字吐字与少儿科学嗓音保护。',
        },
        {
          key: 'performance-opportunities',
          title: '丰富舞台实践历程',
          summary: '常态化受邀参演高规格外交庆典、大型专场音乐会、市民文化节日与慈善盛会，塑造大气自信的舞台风采。',
        },
        {
          key: 'cultural-diversity',
          title: '多元文化传承与融合',
          summary: '曲目融汇中华传统民歌精粹、中外经典艺术合唱与世界多元文化友谊之声，涵养包容宽广的国际文化胸襟。',
        },
      ],
      performancesEyebrow: '舞台实况与实践历程',
      performancesTitle: '精彩演出记录：见证少年歌者的舞台成长',
      performancesSubtitle: '我们坚信舞台是最好的课堂。以下是 SAIMA 儿童合唱团近期的重要代表性演出实践。',
      performances: [
        {
          id: 'national-day-20260929',
          title: '庆祝中华人民共和国成立77周年招待会演出',
          eyebrow: '重要外交庆典专场演出',
          date: '2026年9月29日',
          venue: '阿德莱德',
          host: '中国驻阿德莱德总领事馆',
          repertoire: '《盛世星河》',
          description: [
            '2026年9月29日，SAIMA 儿童合唱团受中国驻阿德莱德总领事馆特别邀请，作为特邀少儿表演团体亮相庆祝中华人民共和国成立77周年官方招待会。',
            '在华美庄重的会场中央，小团员们手持闪烁星光的道具，动情献唱代表作《盛世星河》。清澈纯净的童声和声与深情真挚的表达，化作跨越山海的星河，向祖籍国致敬，也向世界传递和平、友谊与少年希望。',
            '整场演出赢得了在场中澳各界政要、外交使节、侨界领袖与各界嘉宾的全场起立鼓掌与高度赞扬，充分展现了南澳华裔青少年蓬勃向上的精神风貌与出色的艺术造诣。',
          ],
          photos: [
            {
              url: '/images/saima/choir1.jpg',
              caption: '合唱团团员手持星光在国庆77周年招待会官方大屏幕前深情献唱《盛世星河》。',
            },
            {
              url: '/images/saima/choir.jpg',
              caption: '小歌者们在中澳两国国旗前真情歌唱，传递中澳文化交流与少年友谊之声。',
            },
            {
              url: '/images/saima/choir2.jpeg',
              caption: '演出圆满结束后，身着演出服与熊猫头饰的小团员们在现场欢聚留影。',
            },
          ],
        },
        {
          id: 'gala-concert-20261016',
          title: '南澳国际音乐协会年度专场音乐会现场展演',
          eyebrow: '大型音乐厅专场演出',
          date: '2026年10月16日',
          venue: '阿德莱德音乐厅',
          host: '南澳国际音乐协会 (SAIMA)',
          repertoire: '多声部中外经典合唱与少儿声乐独唱',
          description: [
            '2026年10月16日，在阿德莱德座无虚席的正式音乐会大舞台上，SAIMA 儿童合唱团作为主力参演阵容，向全场观众倾情呈现了高水准的合唱盛宴。',
            '在专业舞台灯光、宏大背景投影与现场拾音设备的配合下，小团员们呈现了极具难度的多声部合唱与精彩独唱选段，声音融合度极高、声部层次丰富、音色通透纯净。',
            '演出结束后，小团员们与莅临音乐会现场的南澳政界嘉宾、侨界代表及国际客座艺术家同台合影留念，见证了属于少年音乐家们的耀眼时刻。',
          ],
          photos: [
            {
              url: '/images/saima/choir-performances/20261016-stage.jpg',
              caption: 'SAIMA 儿童合唱团全员在阿德莱德音乐会舞台上呈现多声部合唱。',
            },
            {
              url: '/images/saima/choir-performances/20261016-singing.jpg',
              caption: '小歌手们全神贯注投入歌唱，展现出色的声乐表现力与专注力。',
            },
            {
              url: '/images/saima/choir-performances/20261016-choir-group.jpg',
              caption: '合唱团小团员们在 SAIMA 标志性舞台背景前集体合影留念。',
            },
            {
              url: '/images/saima/choir-performances/20261016-dignitaries.jpg',
              caption: '演出落幕后，小团员们与各界政要、嘉宾及艺术家同台合影留念。',
            },
          ],
        },
      ],
      cta: {
        eyebrow: '加入合唱大家庭',
        title: '欢迎加入 SAIMA 儿童合唱团',
        text: '我们常年招募 6 至 16 岁热爱歌唱、乐于学习的少年儿童。通过专业试唱与导师评估，进入系统排练梯队，与志同道合的同龄伙伴一同登上舞台，开启属于你的音乐旅程。',
        action: '登记试唱与报名意向',
      },
      backAction: '返回合唱团主页',
    },
    labels: {
      aboutProgram: '关于项目',
      jumpToSection: '合唱团分团导航',
      repertoire: '演唱曲目',
      dateAndVenue: '时间与地点',
      host: '主办单位 / 邀请方',
      performanceMoments: '演出精彩实况',
    },
    upcoming: {
      eyebrow: '即将准备',
      title: '中秋节社区联欢会',
      rows: [
        { label: '时间', value: '待公布' },
        { label: '地点', value: '待公布' },
      ],
    },
    cta: {
      title: '您与孩子的音乐旅程从这里开始。',
      text: '无论是家庭共同加入亲子合唱团，还是为孩子报名儿童合唱团，欢迎给 SAIMA 留言，我们会为您安排下一次排练与试唱机会。',
      action: '登记意向',
    },
    detailsAction: '阅读合唱团详情',
  },
}
