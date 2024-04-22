// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Gabe9T', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Recent Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Gabe9T/Sound-Check', 
          'Gabe9T/GardenTracker'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sound Check',
          description: 'Sound Check enables users to search and save local bands, fostering community engagement. Connect with fellow music enthusiasts to share experiences and recommendations. Discover new bands and expand your musical horizons effortlessly. Using Vite, React, JavaScript, Firebase, and MaterialUI.',          
          imageUrl:
          'https://raw.githubusercontent.com/Gabe9T/Sound-Check/main/src/assets/SoundCheck.jpg',
          link: 'https://sound-check.netlify.app/',
        },
        {
          title: 'Cribbage',
          description:
            '                       Game of Cribbage. Using JavaScript, HTML, and CSS.',
          imageUrl:
            'https://raw.githubusercontent.com/Gabe9T/Cribbage/main/src/assets/gameboard.png',
          link: 'https://github.com/Gabe9T/Cribbage',
        },
        {
          title: 'Garden Tracker',
          description:
            'WebAPI for Garden plating. Using JavaScript, React, C#, Swagger, MySQL.',
          imageUrl:
            'https://raw.githubusercontent.com/Gabe9T/GardenTracker/main/GardenAPI.Solution/GardenApi/wwwroot/img/uiHome.png',
          link: 'https://github.com/Gabe9T/GardenTracker',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gabriel Tucker',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Gabe9T',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', 
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.Gabe9T.dev',
    phone: '',
    email: 'gabrieltuckereze@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'C#',
    'Python',
    'React',
    'Material UI',
    'MySQL',
    'PostgreSQL',
    'Firestore',
    'ASP NET',
    '.NET',
    'Swagger',
    'Flask',
    'BS4',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind',
    'Git',
    'Node.js',
    'Docker',
    'Webpack',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'Epicodus',
      body: "A total of 800 hours of classroom instruction, complemented by 120 hours dedicated to capstone projects, with an additional 150 hours further added through internship experience.",
      year: 'March 2022',
      link: 'https://epicodus.com',
    },
  ],
  educations: [
    {
      institution: 'Mt.Hood Community College',
      degree: 'Associate\'s Computer Science ',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Epicodus',
      degree: 'Certificate of Web and Mobile Development',
      from: '2023',
      to: '2024',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'aqua',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'light',
      'aqua',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  

  enablePWA: true,
};

export default CONFIG;
