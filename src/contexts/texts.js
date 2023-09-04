import { createContext } from "react";

const state = {
  myName: "Lenni Mikael",
  greeting: "Thanks for visiting me.",
  introSelf: "✋I'm Lenni Mikael",
  myRole: "I'm a crazy Full-Stack JavaScript 🌐developer",
  education: "I'm a 👨‍🎓graduate from Helsinki University",
  contactMe: "You can 📲 me through discord or ✉️",
  birthday: "11/20/1997",
  intro: `I am a dedicated full stack JavaScript developer with 7+ years of experience.
  I have plenty of skills for building scalable backend APIs and frontend applications using Node.js frameworks.
  I am well-known for writing clean, well-organized, and reusable code.`,
  objective: `I hope a challenging position as a full stack JavaScript developer where I can utilize my expertise in both front-end and back-end development to create dynamic and responsive web applications.
  My goal is to leverage my skills and experience to contribute to the success of the team and organization while continuously learning and improving my craft`,
  frontendDev:
    "Implemented efficient and scalable front-end architectures using modern frameworks such as React, Next.js, Vue.js, Nuxt.js enabling modular, DRY and reusable code.",
  fullDev:
    "Implemented RESTful APIs and integrated them with front-end applications, utilizing Express.js / Koa.js to handle server-side logic and data management",
};

const linksContext = createContext({
  state,
  dispatch: () => null,
});

export default linksContext;
