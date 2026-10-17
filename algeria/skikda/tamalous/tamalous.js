// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamalous","repository":"africa","path":"algeria/skikda/tamalous","depth":3,"parent":"algeria/skikda","children":["djemmala"]});
export const childModules = Object.freeze({"djemmala":"./djemmala/djemmala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
