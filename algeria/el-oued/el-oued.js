// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-oued","repository":"africa","path":"algeria/el-oued","depth":2,"parent":"algeria","children":["debila","guemar","reguiba","robbah"]});
export const childModules = Object.freeze({"debila":"./debila/debila.js","guemar":"./guemar/guemar.js","reguiba":"./reguiba/reguiba.js","robbah":"./robbah/robbah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
