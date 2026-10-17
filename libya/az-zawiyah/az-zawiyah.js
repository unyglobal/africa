// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"az-zawiyah","repository":"africa","path":"libya/az-zawiyah","depth":2,"parent":"libya","children":["al-hurshah","qarquzah","sabratah","surman","zawiya"]});
export const childModules = Object.freeze({"al-hurshah":"./al-hurshah/al-hurshah.js","qarquzah":"./qarquzah/qarquzah.js","sabratah":"./sabratah/sabratah.js","surman":"./surman/surman.js","zawiya":"./zawiya/zawiya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
