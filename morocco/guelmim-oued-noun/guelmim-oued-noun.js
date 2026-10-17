// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guelmim-oued-noun","repository":"africa","path":"morocco/guelmim-oued-noun","depth":2,"parent":"morocco","children":["assa","bou-izakarn","guelmim","tan-tan"]});
export const childModules = Object.freeze({"assa":"./assa/assa.js","bou-izakarn":"./bou-izakarn/bou-izakarn.js","guelmim":"./guelmim/guelmim.js","tan-tan":"./tan-tan/tan-tan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
