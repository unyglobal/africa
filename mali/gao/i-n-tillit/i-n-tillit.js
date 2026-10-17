// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"i-n-tillit","repository":"africa","path":"mali/gao/i-n-tillit","depth":3,"parent":"mali/gao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
