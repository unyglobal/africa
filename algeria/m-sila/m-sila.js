// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"m-sila","repository":"africa","path":"algeria/m-sila","depth":2,"parent":"algeria","children":["ain-el-hadjel","ain-el-melh","bou-saada","melouza","sidi-aissa"]});
export const childModules = Object.freeze({"ain-el-hadjel":"./ain-el-hadjel/ain-el-hadjel.js","ain-el-melh":"./ain-el-melh/ain-el-melh.js","bou-saada":"./bou-saada/bou-saada.js","melouza":"./melouza/melouza.js","sidi-aissa":"./sidi-aissa/sidi-aissa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
