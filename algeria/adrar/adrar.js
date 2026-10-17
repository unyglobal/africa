// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adrar","repository":"africa","path":"algeria/adrar","depth":2,"parent":"algeria","children":["aoulef","reggane"]});
export const childModules = Object.freeze({"aoulef":"./aoulef/aoulef.js","reggane":"./reggane/reggane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
