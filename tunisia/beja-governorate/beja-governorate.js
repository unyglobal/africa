// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beja-governorate","repository":"africa","path":"tunisia/beja-governorate","depth":2,"parent":"tunisia","children":["beja","medjez-el-bab","tabursuq"]});
export const childModules = Object.freeze({"beja":"./beja/beja.js","medjez-el-bab":"./medjez-el-bab/medjez-el-bab.js","tabursuq":"./tabursuq/tabursuq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
