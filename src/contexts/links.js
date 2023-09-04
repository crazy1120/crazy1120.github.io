import { createContext } from "react";

const state = {
  avatar: "../assets/images/avatar.png",
  resume: "../../assets/files/Lenni Mikael.pdf",
};

const linksContext = createContext({
  state,
  dispatch: () => null,
});

export default linksContext;
