import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Trustin Simpson',
  lang: 'en',
  description: 'Welcome!',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Trustin Simpson',
  subtitle: 'I am the developer for you!',
  cta: 'Would you like to know more?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm Trustin, a former recruiter turned web developer! My passion for development started in high school, researching and writting small batch files to fix a bug involving copy and paste on my school laptop. I continued my journey by working with custom ROMs on Android over the years, but never really dove into truly developing.",
  paragraphTwo:
    "Recently, I decided that my career in recruiting, while enjoyable and fulfilling, has never really allowed me to live up to the potential nor pursue the passion I've always had for developement. So, in early 2020 I began the process of pursuing a career in the web dev world, and am now proud to call myself a junior developer!",
  paragraphThree:
    'For more information about my background, feel free to view my resume and some of the projects I have worked on!',
  resume: 'https://my.indeed.com/p/trustins-2jjgz2q',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'RoboFriends',
    info:
      'RoboFriends is a simple web app designed using React. The idea is to showcase the modularity of the the React platform with a simple, but fun app.',
    info2:
      'Never lose track of your non-carbon based friends again, when you utilize this address book!',
    url: 'https://heuristic-lamport-22a5e8.netlify.app/',
    repo: 'https://github.com/trustinsimpson/robofriends',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cooking Knife Recommender',
    info:
      'A small website built with a combination of bootstrap and css-grid. Designed without React to demonstrate how even small projects could benefit from the clean coding and oranization React provides.',
    info2:
      "Cooking is a way to a healthier lifestyle, but you shouldn't have to be wealthy to get started! Here's a simple recommender for the only 3 knives you need to get started.",
    url: 'https://trustinsimpson.github.io/cooking_knives/index.html',
    repo: 'https://github.com/trustinsimpson/cooking_knives',
  },
  {
    id: nanoid(),
    img: 'welding-project.jpg',
    title: 'SEK Fab Business Site',
    info: 'A single page website for a small fabrication business based out of South East Kansas.',
    info2:
      'Designed with simplicity and responsiveness in mind in order to maximize web exposure for a start-up shop.',
    url: 'https://determined-roentgen-1dd5a2.netlify.app/',
    repo: 'https://github.com/trustinsimpson/sek-fab',
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'Passionate, dedicated, and energetic, I bring a lot to the table despite my short professional career in the industry. I look forward to seeing how I can be a benefit to your organization!',
  btn: "Let's Talk Today",
  email: 'contact@trustinsimpson.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SimpsonTrustin',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/trustinsimpson',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/trustin-simpson-52300a9b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/trustinsimpson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
