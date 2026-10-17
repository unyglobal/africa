// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zanzan-district","repository":"africa","path":"ivory-coast/zanzan-district","depth":2,"parent":"ivory-coast","children":["bondoukou","bouna","doropo","flakiedougou","sinfra","tanda"]});
export const childModules = Object.freeze({"bondoukou":"./bondoukou/bondoukou.js","bouna":"./bouna/bouna.js","doropo":"./doropo/doropo.js","flakiedougou":"./flakiedougou/flakiedougou.js","sinfra":"./sinfra/sinfra.js","tanda":"./tanda/tanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
