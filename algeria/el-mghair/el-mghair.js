// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-mghair","repository":"africa","path":"algeria/el-mghair","depth":2,"parent":"algeria","children":["djamaa","el-meghaier","sidi-amrane"]});
export const childModules = Object.freeze({"djamaa":"./djamaa/djamaa.js","el-meghaier":"./el-meghaier/el-meghaier.js","sidi-amrane":"./sidi-amrane/sidi-amrane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
