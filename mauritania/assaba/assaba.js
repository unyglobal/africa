// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"assaba","repository":"africa","path":"mauritania/assaba","depth":2,"parent":"mauritania","children":["el-ayoun","elghabra","guerou","kiffa"]});
export const childModules = Object.freeze({"el-ayoun":"./el-ayoun/el-ayoun.js","elghabra":"./elghabra/elghabra.js","guerou":"./guerou/guerou.js","kiffa":"./kiffa/kiffa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
