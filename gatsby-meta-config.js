module.exports = {
  title: `sangham-blog`,
  description: `sangham's blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sangham-blog.netlify.app/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `parksanghyeop/sangham-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-TLK3HJ99MZ', // Google Analytics Tracking ID
  author: {
    name: `박상협`,
    bio: {
      role: `개발자`,
      description: ['생각하는', '고민하는', '즐기는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/parksanghyeop`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `mon2210@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.11 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/',
          github: 'https://github.com/parksanghyeop/sangham-blog',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '음악 SNS 개발',
        description:
          '',
        techStack: ['spring boot', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
