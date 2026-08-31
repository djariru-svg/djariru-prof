export type Lang = 'en' | 'rw'

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'rw', label: 'Ikinyarwanda', short: 'RW' },
]

type Dictionary = {
  controls: { theme: string; language: string; light: string; dark: string }
  nav: {
    home: string
    about: string
    portfolio: string
    blog: string
    contact: string
    cta: string
    menu: string
  }
  hero: {
    badge: string
    role: string
    intro: string
    viewPortfolio: string
    getInTouch: string
    stats: { value: string; label: string }[]
    medallionTag: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    highlights: { title: string; text: string }[]
    toolkitTitle: string
    skills: { group: string; items: string[] }[]
  }
  portfolio: {
    eyebrow: string
    title: string
    intro: string
    projects: {
      category: string
      title: string
      description: string
      tags: string[]
      year: string
    }[]
  }
  faith: {
    eyebrow: string
    title: string
    intro: string
    values: { title: string; text: string }[]
    cardTitle: string
    cardSubtitle: string
    progressLabel: string
    bodyBefore: string
    bodyHighlight: string
    bodyAfter: string
  }
  community: {
    eyebrow: string
    title: string
    intro: string
    activities: { title: string; text: string }[]
  }
  blogPreview: { eyebrow: string; title: string; viewAll: string; intro: string }
  blogPage: { eyebrow: string; title: string; intro: string; all: string }
  posts: {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readingTime: string
  }[]
  postCard: { read: string }
  contact: {
    eyebrow: string
    title: string
    intro: string
    emailCta: string
    channels: { key: string; label: string; value: string }[]
  }
  footer: { quote: string; connect: string; rights: string; tagline: string }
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    controls: { theme: 'Toggle theme', language: 'Change language', light: 'Light', dark: 'Dark' },
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
      cta: "Let's talk",
      menu: 'Toggle navigation menu',
    },
    hero: {
      badge: 'Software Studio & Portfolio',
      role: 'Vue.js Master · Debug Hunter · Software Tester · Design Expert',
      intro:
        'Vue.js Master — Building scalable software with purpose. I craft resilient interfaces, hunt down elusive bugs, and design systems that stand the test of real-world use.',
      viewPortfolio: 'View portfolio',
      getInTouch: 'Get in touch',
      stats: [
        { value: 'Vue.js', label: 'Core Specialty' },
        { value: 'Full Stack', label: 'End to End' },
        { value: 'QA First', label: 'Tested & Reliable' },
      ],
      medallionTag: 'Est. Excellence',
    },
    about: {
      eyebrow: 'About',
      title: 'A craftsman devoted to quality',
      paragraphs: [
        "I'm Karangwa Djariru — a software engineer who treats building software as a craft. My work centers on Vue.js, where I design front-end architectures that stay simple as they grow, backed by robust backend systems in Python, JavaScript, and MongoDB.",
        "I earned the reputation of a debug hunter because I don't stop at symptoms — I trace problems to their root. As a software tester, I believe reliability is a feature, and that great design and disciplined workflows are what let teams move fast without breaking things.",
        'From Firebase Hosting deployments to Git workflows and CI, I care about the whole lifecycle — and about mentoring the community along the way.',
      ],
      highlights: [
        {
          title: 'Vue.js Mastery',
          text: 'Architecting scalable, maintainable Vue applications with clean, reusable components.',
        },
        {
          title: 'Debug Hunter',
          text: 'Tracking down the hardest bugs with a methodical, reproducible approach.',
        },
        {
          title: 'Software Testing',
          text: 'Building trust through tests that document intent and catch real regressions.',
        },
        {
          title: 'Design & Workflows',
          text: 'Thoughtful software design and disciplined Git workflows that keep teams shipping.',
        },
      ],
      toolkitTitle: 'Technical Toolkit',
      skills: [
        {
          group: 'Frontend',
          items: ['Vue.js', 'JavaScript', 'TypeScript', 'Component Design', 'State Management'],
        },
        {
          group: 'Backend',
          items: ['Python', 'Node.js', 'REST APIs', 'MongoDB', 'Firebase Hosting'],
        },
        {
          group: 'Quality & Tooling',
          items: ['Debugging', 'Software Testing', 'Git Workflows', 'CI/CD', 'Software Design'],
        },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Selected work & projects',
      intro:
        'A selection of projects spanning frontend architecture, full-stack systems, developer tooling, and automation — each built with a focus on scale, reliability, and clean design.',
      projects: [
        {
          category: 'Frontend Architecture',
          title: 'Vue Component Library',
          description:
            'A production-grade, accessible Vue.js component system with theming, unit tests, and full documentation used across multiple internal products.',
          tags: ['Vue.js', 'TypeScript', 'Testing'],
          year: '2025',
        },
        {
          category: 'Full Stack',
          title: 'Realtime Analytics Dashboard',
          description:
            'Data-heavy dashboard backed by MongoDB and Firebase, streaming live metrics with optimized queries and a resilient caching layer.',
          tags: ['Vue.js', 'MongoDB', 'Firebase'],
          year: '2024',
        },
        {
          category: 'Developer Tooling',
          title: 'Bug Hunter Toolkit',
          description:
            'A debugging companion that traces state mutations, surfaces race conditions, and generates reproducible test cases for complex Vue apps.',
          tags: ['Debugging', 'JavaScript', 'DX'],
          year: '2024',
        },
        {
          category: 'Backend Systems',
          title: 'Python Automation Suite',
          description:
            'Backend services automating data pipelines and QA reports, with a rigorous test harness ensuring reliability at scale.',
          tags: ['Python', 'Testing', 'Automation'],
          year: '2023',
        },
      ],
    },
    faith: {
      eyebrow: 'Faith & Values',
      title: 'Building with intention and Islamic values',
      intro:
        'My faith shapes how I work. Islam teaches discipline, integrity, and service to others — principles I carry into engineering, testing, and mentoring. I strive to build technology that is honest, useful, and ethical.',
      values: [
        {
          title: 'Discipline',
          text: 'Consistent habits and focused deep work, in code and in worship.',
        },
        {
          title: 'Integrity',
          text: 'Honesty and accountability in every commit, conversation, and commitment.',
        },
        {
          title: 'Community Service',
          text: 'Giving back through mentorship, knowledge sharing, and helping others grow.',
        },
      ],
      cardTitle: "Qur'an Memorization",
      cardSubtitle: 'Continuous spiritual growth',
      progressLabel: 'Progress',
      bodyBefore: 'I have completed ',
      bodyHighlight: "33% of the Qur'an",
      bodyAfter:
        ' — a journey of dedication, patience, and steady progress that mirrors the discipline I bring to my craft.',
    },
    community: {
      eyebrow: 'Community',
      title: 'Leadership & giving back',
      intro:
        'Beyond code, I invest in people — mentoring, teaching, and building communities where developers learn, grow, and support one another.',
      activities: [
        {
          title: 'Mentorship',
          text: 'Guiding aspiring developers through Vue.js, testing, and clean software design fundamentals.',
        },
        {
          title: 'Tech Talks & Tutorials',
          text: 'Sharing practical tutorials on debugging, testing, and productivity with the developer community.',
        },
        {
          title: 'Community Building',
          text: 'Fostering local and online developer circles rooted in collaboration, ethics, and generosity.',
        },
      ],
    },
    blogPreview: {
      eyebrow: 'Blog',
      title: 'Insights & writing',
      viewAll: 'View all posts',
      intro:
        'Thoughts on Vue.js, debugging, testing, productivity, and Islamic perspectives on technology and ethics.',
    },
    blogPage: {
      eyebrow: 'The Blog',
      title: 'Writing on craft, faith & code',
      intro:
        'Practical lessons on Vue.js, debugging, and testing — alongside reflections on productivity and Islamic perspectives on technology and ethics.',
      all: 'All',
    },
    posts: [
      {
        slug: 'scalable-vue-architecture',
        title: 'Designing Scalable Vue.js Architecture',
        excerpt:
          'How to structure large Vue applications with composables, clear boundaries, and a testing strategy that scales with your team.',
        category: 'Vue.js',
        date: 'Aug 2026',
        readingTime: '8 min read',
      },
      {
        slug: 'the-art-of-debugging',
        title: 'The Art of Debugging: Hunting Bugs Methodically',
        excerpt:
          'A repeatable framework for isolating, reproducing, and eliminating the hardest bugs without guesswork.',
        category: 'Debugging',
        date: 'Jul 2026',
        readingTime: '6 min read',
      },
      {
        slug: 'testing-that-earns-trust',
        title: 'Writing Tests That Actually Earn Trust',
        excerpt:
          'Moving beyond coverage numbers to tests that document intent and catch real regressions.',
        category: 'Testing',
        date: 'Jun 2026',
        readingTime: '7 min read',
      },
      {
        slug: 'discipline-and-deep-work',
        title: 'Discipline, Deep Work, and Faith',
        excerpt:
          'An Islamic perspective on focus, integrity, and building technology with intention and ethics.',
        category: 'Islam & Ethics',
        date: 'May 2026',
        readingTime: '5 min read',
      },
      {
        slug: 'git-workflows-for-teams',
        title: 'Git Workflows That Keep Teams Sane',
        excerpt:
          'Branching strategies, review culture, and commit hygiene that reduce friction and merge conflicts.',
        category: 'Productivity',
        date: 'Apr 2026',
        readingTime: '6 min read',
      },
      {
        slug: 'firebase-hosting-guide',
        title: 'Shipping Vue Apps with Firebase Hosting',
        excerpt:
          'A practical guide to fast, reliable deployments with previews, caching, and rollbacks.',
        category: 'Vue.js',
        date: 'Mar 2026',
        readingTime: '5 min read',
      },
    ],
    postCard: { read: 'Read' },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something with purpose",
      intro:
        "Have a project, a collaboration, or a question about Vue.js and software quality? I'd love to hear from you. Reach out through any of these channels.",
      emailCta: 'Email me directly',
      channels: [
        { key: 'github', label: 'GitHub', value: '@djariru1' },
        { key: 'linkedin', label: 'LinkedIn', value: 'Karangwa Djariru' },
        { key: 'email', label: 'Email', value: 'Send a message' },
        { key: 'instagram', label: 'Instagram', value: '@djariru1' },
      ],
    },
    footer: {
      quote: 'Knowledge is light, and action is faith.',
      connect: 'Connect',
      rights: 'All rights reserved.',
      tagline: 'Vue.js Master — Building scalable software with purpose.',
    },
  },
  rw: {
    controls: { theme: 'Hindura insanganyamatsiko', language: 'Hindura ururimi', light: 'Urumuri', dark: 'Umwijima' },
    nav: {
      home: 'Ahabanza',
      about: 'Ibinyerekeyeho',
      portfolio: 'Imirimo',
      blog: 'Inyandiko',
      contact: 'Twandikire',
      cta: 'Tuganire',
      menu: 'Fungura menu',
    },
    hero: {
      badge: 'Studio ya Software & Imirimo',
      role: "Inzobere muri Vue.js · Umuhigi w'amakosa · Umugenzuzi wa software · Impuguke mu igishushanyo",
      intro:
        'Inzobere muri Vue.js — kubaka software zaguka zifite intego. Nkora imikoranire ikomeye, nguhiga amakosa akomeye, kandi nshushanya sisitemu zihagarara mu mikoreshereze nyayo.',
      viewPortfolio: 'Reba imirimo',
      getInTouch: 'Twandikire',
      stats: [
        { value: 'Vue.js', label: "Ubuhanga bw'ibanze" },
        { value: 'Full Stack', label: 'Uhereye ku ntangiriro kugeza ku mpera' },
        { value: 'QA Mbere', label: 'Byagenzuwe & Byizewe' },
      ],
      medallionTag: 'Ubuhanga Buhanitse',
    },
    about: {
      eyebrow: 'Ibinyerekeyeho',
      title: "Umuhanga wiyeguriye ubuziranenge",
      paragraphs: [
        "Ndi Karangwa Djariru — injeniyeri wa software ufata kubaka software nk'ubuhanga. Akazi kanjye gashingiye kuri Vue.js, aho nshushanya imiterere ya front-end iguma yoroshye uko yaguka, ishyigikiwe na sisitemu za backend zikomeye muri Python, JavaScript, na MongoDB.",
        "Nabonye izina ry'umuhigi w'amakosa kubera ko ntahagarara ku bimenyetso — nkurikirana ibibazo kugeza ku muzi wabyo. Nk'umugenzuzi wa software, nemera ko kwizerwa ari ikiranga, kandi ko igishushanyo cyiza n'imikorere y'indero ari byo bituma amakipe agenda vuba atarimena ibintu.",
        "Kuva ku gushyira ahagaragara kuri Firebase Hosting kugeza ku mikorere ya Git na CI, nitaho ubuzima bwose bw'umushinga — no kigisha umuryango mu nzira.",
      ],
      highlights: [
        {
          title: 'Ubuhanga muri Vue.js',
          text: "Gushushanya porogaramu za Vue zaguka, zoroshye kubungabunga, hamwe n'ibice byiza bishobora kongera gukoreshwa.",
        },
        {
          title: "Umuhigi w'amakosa",
          text: 'Guhiga amakosa akomeye cyane hakoreshejwe uburyo bufatika, bushobora kongera gukorwa.',
        },
        {
          title: 'Igenzura rya Software',
          text: 'Kubaka icyizere binyuze mu bizamini byanditse intego kandi bifata amakosa nyayo.',
        },
        {
          title: 'Igishushanyo & Imikorere',
          text: "Igishushanyo cya software cyitondewe n'imikorere ya Git y'indero bituma amakipe akomeza gutanga.",
        },
      ],
      toolkitTitle: 'Ibikoresho bya tekiniki',
      skills: [
        {
          group: 'Imbere (Frontend)',
          items: ['Vue.js', 'JavaScript', 'TypeScript', "Igishushanyo cy'ibice", 'Gucunga imiterere'],
        },
        {
          group: 'Inyuma (Backend)',
          items: ['Python', 'Node.js', 'REST APIs', 'MongoDB', 'Firebase Hosting'],
        },
        {
          group: 'Ubuziranenge & Ibikoresho',
          items: ['Gukemura amakosa', 'Igenzura rya Software', 'Imikorere ya Git', 'CI/CD', 'Igishushanyo cya Software'],
        },
      ],
    },
    portfolio: {
      eyebrow: 'Imirimo',
      title: "Imirimo n'imishinga byatoranyijwe",
      intro:
        "Urutonde rw'imishinga ihuza imiterere ya frontend, sisitemu zuzuye, ibikoresho by'abakora porogaramu, n'ikoranabuhanga ryikora — buri wese wubatswe hitawe ku bunini, kwizerwa, n'igishushanyo gisukuye.",
      projects: [
        {
          category: 'Imiterere ya Frontend',
          title: 'Vue Component Library',
          description:
            "Sisitemu y'ibice bya Vue y'urwego rwo hejuru, igerwaho, ifite theming, ibizamini, n'inyandiko zuzuye zikoreshwa mu bicuruzwa byinshi imbere mu kigo.",
          tags: ['Vue.js', 'TypeScript', 'Igenzura'],
          year: '2025',
        },
        {
          category: 'Full Stack',
          title: 'Realtime Analytics Dashboard',
          description:
            "Dashboard ikungahaye ku makuru ishyigikiwe na MongoDB na Firebase, itanga imibare mu gihe nyacyo hamwe n'ubushakashatsi bwanozwe n'urwego rukomeye rwo kubika.",
          tags: ['Vue.js', 'MongoDB', 'Firebase'],
          year: '2024',
        },
        {
          category: "Ibikoresho by'Abahanga",
          title: 'Bug Hunter Toolkit',
          description:
            "Umufasha wo gukemura amakosa ukurikirana impinduka z'imiterere, ugaragaza ibibazo by'irushanwa, kandi ukora ibizamini bishobora kongera gukorwa kuri porogaramu za Vue zigoye.",
          tags: ['Gukemura amakosa', 'JavaScript', 'DX'],
          year: '2024',
        },
        {
          category: 'Sisitemu za Backend',
          title: 'Python Automation Suite',
          description:
            "Serivisi za backend zikora ku buryo bwikora imiyoboro y'amakuru na raporo za QA, hamwe n'uburyo bukomeye bw'ibizamini butuma byizerwa ku rugero runini.",
          tags: ['Python', 'Igenzura', 'Ikora ryikora'],
          year: '2023',
        },
      ],
    },
    faith: {
      eyebrow: 'Ukwemera & Indangagaciro',
      title: "Kubaka ufite intego n'indangagaciro za Kiyisilamu",
      intro:
        "Ukwemera kwanjye kugena uko nkora. Ubuyisilamu bwigisha indero, ubunyangamugayo, no gufasha abandi — amahame mporana mu bwubatsi, igenzura, no kigisha. Ndwanira kubaka ikoranabuhanga rinyangamugayo, rifite akamaro, kandi ryubahiriza umuco mwiza.",
      values: [
        {
          title: 'Indero',
          text: 'Imigenzo ihamye n\'akazi kimbitse kibanze, mu code no mu gusenga.',
        },
        {
          title: 'Ubunyangamugayo',
          text: "Ukuri no kwiyemeza muri buri commit, ikiganiro, n'isezerano.",
        },
        {
          title: 'Serivisi ku Muryango',
          text: 'Gutanga binyuze mu kwigisha, gusangira ubumenyi, no gufasha abandi gukura.',
        },
      ],
      cardTitle: "Kwiga Qur'an ku mutwe",
      cardSubtitle: 'Iterambere ry\'umwuka rihoraho',
      progressLabel: 'Aho bigeze',
      bodyBefore: 'Narangije ',
      bodyHighlight: "33% bya Qur'an",
      bodyAfter:
        " — urugendo rw'ubwitange, ukwihangana, n'iterambere rihamye bigaragaza indero nzana mu buhanga bwanjye.",
    },
    community: {
      eyebrow: 'Umuryango',
      title: 'Ubuyobozi & Gutanga',
      intro:
        'Hejuru ya code, nita ku bantu — mba mfasha, nigisha, kandi nubaka imiryango aho abahanga biga, bagakura, bakanafashanya.',
      activities: [
        {
          title: "Ubufasha bw'inararibonye",
          text: "Kuyobora abifuza kuba abahanga muri Vue.js, igenzura, n'ishingiro ry'igishushanyo cya software gisukuye.",
        },
        {
          title: 'Ibiganiro bya Tekiniki & Amasomo',
          text: "Gusangira amasomo afatika ku gukemura amakosa, igenzura, n'umusaruro n'umuryango w'abahanga.",
        },
        {
          title: 'Kubaka Umuryango',
          text: "Guteza imbere amatsinda y'abahanga yo mu gace no kuri interineti ashingiye ku bufatanye, umuco mwiza, n'ubuntu.",
        },
      ],
    },
    blogPreview: {
      eyebrow: 'Inyandiko',
      title: 'Ibitekerezo & Inyandiko',
      viewAll: 'Reba inyandiko zose',
      intro:
        "Ibitekerezo kuri Vue.js, gukemura amakosa, igenzura, umusaruro, n'uko Ubuyisilamu bubona ikoranabuhanga n'umuco mwiza.",
    },
    blogPage: {
      eyebrow: 'Inyandiko',
      title: 'Inyandiko ku buhanga, ukwemera & code',
      intro:
        "Amasomo afatika kuri Vue.js, gukemura amakosa, n'igenzura — hamwe n'ibitekerezo ku musaruro n'uko Ubuyisilamu bubona ikoranabuhanga n'umuco mwiza.",
      all: 'Byose',
    },
    posts: [
      {
        slug: 'scalable-vue-architecture',
        title: 'Gushushanya Imiterere ya Vue.js Yaguka',
        excerpt:
          "Uko wateguza porogaramu nini za Vue ukoresheje composables, imbibi zigaragara, n'ingamba z'igenzura zikura n'ikipe yawe.",
        category: 'Vue.js',
        date: 'Kanama 2026',
        readingTime: 'iminota 8',
      },
      {
        slug: 'the-art-of-debugging',
        title: 'Ubuhanga bwo Gukemura Amakosa: Guhiga Amakosa mu Buryo Bufatika',
        excerpt:
          'Uburyo bushobora kongera gukoreshwa bwo gutandukanya, kongera gukora, no gukuraho amakosa akomeye nta kubyibwira.',
        category: 'Gukemura amakosa',
        date: 'Nyakanga 2026',
        readingTime: 'iminota 6',
      },
      {
        slug: 'testing-that-earns-trust',
        title: 'Kwandika Ibizamini Bizana Icyizere Nyakuri',
        excerpt:
          "Kurenga imibare y'aho bigeze ujya ku bizamini byanditse intego kandi bifata amakosa nyayo.",
        category: 'Igenzura',
        date: 'Kamena 2026',
        readingTime: 'iminota 7',
      },
      {
        slug: 'discipline-and-deep-work',
        title: "Indero, Akazi Kimbitse, n'Ukwemera",
        excerpt:
          "Uko Ubuyisilamu bubona kwibanda, ubunyangamugayo, no kubaka ikoranabuhanga ufite intego n'umuco mwiza.",
        category: 'Ubuyisilamu & Umuco',
        date: 'Gicurasi 2026',
        readingTime: 'iminota 5',
      },
      {
        slug: 'git-workflows-for-teams',
        title: 'Imikorere ya Git Igumisha Amakipe mu Mahoro',
        excerpt:
          "Ingamba z'amashami, umuco wo gusuzuma, n'isuku ya commit bigabanya inzitizi n'amakimbirane yo guhuza.",
        category: 'Umusaruro',
        date: 'Mata 2026',
        readingTime: 'iminota 6',
      },
      {
        slug: 'firebase-hosting-guide',
        title: 'Gutanga Porogaramu za Vue ukoresheje Firebase Hosting',
        excerpt:
          "Ubuyobozi bufatika bwo gushyira ahagaragara vuba kandi byizewe hamwe n'ibigaragazwa mbere, caching, no gusubira inyuma.",
        category: 'Vue.js',
        date: 'Werurwe 2026',
        readingTime: 'iminota 5',
      },
    ],
    postCard: { read: 'Soma' },
    contact: {
      eyebrow: 'Twandikire',
      title: 'Reka twubake ikintu gifite intego',
      intro:
        "Ufite umushinga, ubufatanye, cyangwa ikibazo kuri Vue.js n'ubuziranenge bwa software? Nkwifuriza kukwumva. Nyabuneka unyandikire unyuze kuri bumwe muri ubu buryo.",
      emailCta: 'Nyandikira kuri email',
      channels: [
        { key: 'github', label: 'GitHub', value: '@djariru1' },
        { key: 'linkedin', label: 'LinkedIn', value: 'Karangwa Djariru' },
        { key: 'email', label: 'Email', value: 'Ohereza ubutumwa' },
        { key: 'instagram', label: 'Instagram', value: '@djariru1' },
      ],
    },
    footer: {
      quote: "Ubumenyi ni urumuri, kandi igikorwa ni ukwemera.",
      connect: 'Huza',
      rights: 'Uburenganzira bwose burafitwe.',
      tagline: 'Inzobere muri Vue.js — Kubaka software zaguka zifite intego.',
    },
  },
}
