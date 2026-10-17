// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bari","repository":"africa","path":"somalia/bari","depth":2,"parent":"somalia","children":["bosaso","el-dibir","qandala"]});
export const childModules = Object.freeze({"bosaso":"./bosaso/bosaso.js","el-dibir":"./el-dibir/el-dibir.js","qandala":"./qandala/qandala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
