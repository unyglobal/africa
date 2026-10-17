// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaghouan-governorate","repository":"africa","path":"tunisia/zaghouan-governorate","depth":2,"parent":"tunisia","children":["el-fahs","zaghouan"]});
export const childModules = Object.freeze({"el-fahs":"./el-fahs/el-fahs.js","zaghouan":"./zaghouan/zaghouan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
