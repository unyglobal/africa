// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"logone-oriental","repository":"africa","path":"chad/logone-oriental","depth":2,"parent":"chad","children":["bebedja","doba","gore"]});
export const childModules = Object.freeze({"bebedja":"./bebedja/bebedja.js","doba":"./doba/doba.js","gore":"./gore/gore.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
