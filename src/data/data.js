import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Julian Vila",
  lang: "en",
  description: "Julian Vila's Simple Portfolio",
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is",
  name: "Julian Vila",
  subtitle: "I'm the Unknown Developer.",
  cta: "Know more",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.",
  paragraphTwo:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.",
  paragraphThree: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA testing
export const projectsData = [
  {
    id: nanoid(),
    img: "mockCritical.png",
    title: "Mock Critical",
    info: "A mobile friendly landing page of a fake clothing store.",
    info2: "This react app contains unit, hook, and integration testing.",
    url: "https://vilaj46.github.io/mock-critical/",
    repo: "https://github.com/vilaj46/mock-critical", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "unionGables.png",
    title: "Union Gables Inn",
    info: "Gatsby application which makes use of styled/reusable components.",
    info2: "",
    url: "https://xenodochial-swanson-ae4f70.netlify.app/",
    repo: "https://github.com/vilaj46/union-gables", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "glorifiedTodo.png",
    title: "Glorified Todo",
    info: "Glorified Todo is a Reac app with a node backend.",
    info2:
      "Drag and Drop is not working. Make sure all the API calls are hooked up.",
    url: "https://vilaj46.github.io/glorified-todo/#/",
    repo: "https://github.com/vilaj46/glorified-todo", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ["brief1.png", "brief1232.png", "brief1233.png", "brief1234.png"],
    title: "Ad1 & Ad2 Brief Preparation",
    info: "Appellate Division brief preparation",
    url: "#!",
    repo: "https://github.com/vilaj46/ad1-ad2-briefs",
  },
  {
    id: nanoid(),
    img: ["documentDownloader1.png", "documentDownloader2.png"],
    title: "Document Downloader - Firefox",
    info: "Assistance to download specific documents",
    url: "#!",
    repo: "https://github.com/vilaj46/nyscef-document-downloader",
  },
  {
    id: nanoid(),
    img: [
      "documentDownloaderReact1231.png",
      "documentDownloaderReact1232.png",
      "documentDownloaderReact1233.png",
      "documentDownloaderReact1234.png",
      "documentDownloaderReact1235.png",
    ],
    title: "Document Downloader - Chrome",
    info: "Assistance to download specific documents",
    url: "#!",
    repo: "https://github.com/vilaj46/nyscef-document-downloader",
  },
  {
    id: nanoid(),
    img: "franklinCourtPress.png",
    title: "Franklin Court Press",
    info: "Contact Info and links for Franklin Court Press",
    url: "http://www.franklincourtpress.com/",
    repo: "https://github.com/vilaj46/fcp-next",
  },
  {
    id: nanoid(),
    img: "easyHeaders.png",
    title: "Easy Headers",
    info: "Easier way to add headers that adobe acrobat couldnt do",
    url: "https://vilaj46.github.io/pdf-ui/",
    repo: "https://github.com/vilaj46/pdf-ui",
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? Awesome!",
  btn: "Let's Talk",
  email: "https://github.com/cobidev/react-simplefolio",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "",
    },
    {
      id: nanoid(),
      name: "github",
      url: "",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
