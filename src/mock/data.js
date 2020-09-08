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
    img: 'project2.png',
    title: 'RoboFriends',
    info:
      'RoboFriends is a simple web app designed using React. The idea is to showcase the modularity of teh the React platform with a simple, but fun app.',
    info2:
      'Never lose track of your non-carbon based friends again, when you utilize this address book!',
    url: 'https://heuristic-lamport-22a5e8.netlify.app/',
    repo: 'https://github.com/trustinsimpson/robofriends',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Firearm Recommender',
    info:
      'Growing up in a small town in Missouri, I have a passion for firearms. Unfortunately, all too often I see people with little knowledge of these very dangerous tools, speaking about purchasing and operating one.',
    info2:
      'I believe driving down firearm deaths is not a matter of banning specific types of guns, but rather of education! This project was created to be a first step in the education process for someone interested in exploring the idea of purchasing their first firearm.',
    url: 'https://trustinsimpson.github.io/gun-recommender/',
    repo: 'https://github.com/trustinsimpson/gun-recommender',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Background Gradient Generater',
    info: 'A small project designed to make implementing gradient backgrounds in your CSS easier!',
    info2:
      'Select any two colors you desire, or allow the random background generator to choose for you!',
    url: 'https://trustinsimpson.github.io/color_generator/',
    repo: 'https://github.com/trustinsimpson/color_generator',
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
