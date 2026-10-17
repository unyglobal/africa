// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bouira","repository":"africa","path":"algeria/bouira","depth":2,"parent":"algeria","children":["ain-bessem","chorfa","lakhdaria","sour-el-ghozlane"]});
export const childModules = Object.freeze({"ain-bessem":"./ain-bessem/ain-bessem.js","chorfa":"./chorfa/chorfa.js","lakhdaria":"./lakhdaria/lakhdaria.js","sour-el-ghozlane":"./sour-el-ghozlane/sour-el-ghozlane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
