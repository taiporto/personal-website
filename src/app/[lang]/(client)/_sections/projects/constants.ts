const BASE_PATH = "/images/projects";

enum LinkTypes {
  GITHUB = "github",
  WEBSITE = "website",
}

enum ProjectsTags {
  PERSONAL = "personal",
  FREELANCE = "freelance",
  INSTITUTIONAL = "institutional",
  JAVASCRIPT = "javascript",
  WORDPRESS = "wordpress",
  PYTHON = "python",
  NODEJS = "nodejs",
  REACT = "react",
  TWITTERAPI = "twitterapi",
}

const TAGS = {
  [ProjectsTags.PERSONAL]: {
    type: "category",
    color: "indigo",
  },
  [ProjectsTags.FREELANCE]: {
    type: "category",
    color: "red",
  },
  [ProjectsTags.INSTITUTIONAL]: {
    type: "category",
    color: "black",
  },
  [ProjectsTags.JAVASCRIPT]: {
    type: "technology",
    color: "yellow",
  },
  [ProjectsTags.WORDPRESS]: {
    type: "technology",
    color: "wp",
  },
  [ProjectsTags.PYTHON]: {
    type: "technology",
    color: "pink",
  },
  [ProjectsTags.NODEJS]: {
    type: "technology",
    color: "green",
  },
  [ProjectsTags.REACT]: {
    type: "technology",
    color: "cyan",
  },
  [ProjectsTags.TWITTERAPI]: {
    type: "technology",
    color: "blue",
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "projects.toolkit_ddj._title",
    description: "projects.toolkit_ddj._description",
    image: `${BASE_PATH}/toolkit-ddj.png`,
    tags: [TAGS.institutional, TAGS.javascript, TAGS.react],
    links: [
      {
        type: LinkTypes.GITHUB,
        url: "https://github.com/escola-de-dados/toolkit_ddj",
      },
      {
        type: LinkTypes.WEBSITE,
        url: "https://kit.jornalismodedados.org/",
      },
    ],
  },
  {
    id: 2,
    title: "projects.calculaeco._title",
    description: "projects.calculaeco._description",
    img: `${BASE_PATH}/calcula-eco.png`,
    tags: [TAGS.personal, TAGS.javascript, TAGS.nodejs],
    links: [
      {
        type: LinkTypes.GITHUB,
        url: "https://github.com/taiporto/calcula-eco",
        icon: "fab fa-github",
      },
    ],
  },
  {
    id: 3,
    title: "projects.bandejaobot._title",
    description: "projects.bandejaobot._description",
    img: `${BASE_PATH}/bandejaobot.png`,
    tags: [TAGS.personal, TAGS.python, TAGS.twitterapi],
    links: [
      {
        type: LinkTypes.GITHUB,
        url: "https://github.com/taiporto/bandejaobot-ufrj",
        icon: "fab fa-github",
      },
      {
        type: LinkTypes.WEBSITE,
        url: "https://twitter.com/bandejaobotufrj",
        icon: "fas fa-desktop",
      },
    ],
  },
];
