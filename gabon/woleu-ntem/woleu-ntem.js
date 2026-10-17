// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woleu-ntem","repository":"africa","path":"gabon/woleu-ntem","depth":2,"parent":"gabon","children":["bitam","oyem"]});
export const childModules = Object.freeze({"bitam":"./bitam/bitam.js","oyem":"./oyem/oyem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
