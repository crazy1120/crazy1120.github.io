/**
 * These links are used in navbar and footer.
 * {prefix} indicates either navbar or footer so as to render adequate styles
 */

export { default as Audio } from "./audio";
export { default as Camera } from "./camera";
export { default as Drawing } from "./drawing";
export { default as WatchPhone } from "./watchphone";

// Link Component only for Navbar
export { default as Subscription } from "./subscription";
export { default as Language } from "./lang";

// Link Components only for Footer
export { default as StayConnected } from "./stay-connected";
export { default as MyFirstFreeSIM } from "./free-SIM";
export { default as Support } from "./support";
export { default as Company } from "./company";

export interface LinksProps {
  prefix: string;
}
