// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jijel","repository":"africa","path":"algeria/jijel","depth":2,"parent":"algeria","children":["district-of-taher","el-milia"]});
export const childModules = Object.freeze({"district-of-taher":"./district-of-taher/district-of-taher.js","el-milia":"./el-milia/el-milia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
