// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"le-bardo","repository":"africa","path":"tunisia/tunis-governorate/le-bardo","depth":3,"parent":"tunisia/tunis-governorate","children":["el-habib"]});
export const childModules = Object.freeze({"el-habib":"./el-habib/el-habib.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
