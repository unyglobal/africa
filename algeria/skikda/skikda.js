// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"skikda","repository":"africa","path":"algeria/skikda","depth":2,"parent":"algeria","children":["azzaba","collo","el-arrouch","kerkera","tamalous"]});
export const childModules = Object.freeze({"azzaba":"./azzaba/azzaba.js","collo":"./collo/collo.js","el-arrouch":"./el-arrouch/el-arrouch.js","kerkera":"./kerkera/kerkera.js","tamalous":"./tamalous/tamalous.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
