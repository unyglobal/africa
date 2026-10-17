// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hodh-el-gharbi","repository":"africa","path":"mauritania/hodh-el-gharbi","depth":2,"parent":"mauritania","children":["ayoun-el-atrous","tintane"]});
export const childModules = Object.freeze({"ayoun-el-atrous":"./ayoun-el-atrous/ayoun-el-atrous.js","tintane":"./tintane/tintane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
