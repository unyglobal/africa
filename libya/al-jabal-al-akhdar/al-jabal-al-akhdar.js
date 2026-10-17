// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jabal-al-akhdar","repository":"africa","path":"libya/al-jabal-al-akhdar","depth":2,"parent":"libya","children":["al-bayda","shahhat"]});
export const childModules = Object.freeze({"al-bayda":"./al-bayda/al-bayda.js","shahhat":"./shahhat/shahhat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
