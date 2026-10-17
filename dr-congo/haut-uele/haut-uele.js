// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haut-uele","repository":"africa","path":"dr-congo/haut-uele","depth":2,"parent":"dr-congo","children":["bakwa","isiro","wamba","watsa"]});
export const childModules = Object.freeze({"bakwa":"./bakwa/bakwa.js","isiro":"./isiro/isiro.js","wamba":"./wamba/wamba.js","watsa":"./watsa/watsa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
