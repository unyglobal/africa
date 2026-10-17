// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-bayadh","repository":"africa","path":"algeria/el-bayadh","depth":2,"parent":"algeria","children":["brezina","el-abiodh-sidi-cheikh"]});
export const childModules = Object.freeze({"brezina":"./brezina/brezina.js","el-abiodh-sidi-cheikh":"./el-abiodh-sidi-cheikh/el-abiodh-sidi-cheikh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
