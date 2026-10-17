// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouargla","repository":"africa","path":"algeria/ouargla","depth":2,"parent":"algeria","children":["el-hadjira","hassi-messaoud","rouissat"]});
export const childModules = Object.freeze({"el-hadjira":"./el-hadjira/el-hadjira.js","hassi-messaoud":"./hassi-messaoud/hassi-messaoud.js","rouissat":"./rouissat/rouissat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
