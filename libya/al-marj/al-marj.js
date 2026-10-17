// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-marj","repository":"africa","path":"libya/al-marj","depth":2,"parent":"libya","children":["al-abyar"]});
export const childModules = Object.freeze({"al-abyar":"./al-abyar/al-abyar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
