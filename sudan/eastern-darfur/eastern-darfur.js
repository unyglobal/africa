// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-darfur","repository":"africa","path":"sudan/eastern-darfur","depth":2,"parent":"sudan","children":["el-daein","sh-iariah"]});
export const childModules = Object.freeze({"el-daein":"./el-daein/el-daein.js","sh-iariah":"./sh-iariah/sh-iariah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
