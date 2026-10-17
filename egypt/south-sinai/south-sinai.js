// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-sinai","repository":"africa","path":"egypt/south-sinai","depth":2,"parent":"egypt","children":["el-tor","sharm-el-sheikh"]});
export const childModules = Object.freeze({"el-tor":"./el-tor/el-tor.js","sharm-el-sheikh":"./sharm-el-sheikh/sharm-el-sheikh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
