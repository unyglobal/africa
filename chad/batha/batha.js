// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batha","repository":"africa","path":"chad/batha","depth":2,"parent":"chad","children":["ati","umm-hajar"]});
export const childModules = Object.freeze({"ati":"./ati/ati.js","umm-hajar":"./umm-hajar/umm-hajar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
