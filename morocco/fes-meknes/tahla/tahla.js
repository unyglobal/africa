// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tahla","repository":"africa","path":"morocco/fes-meknes/tahla","depth":3,"parent":"morocco/fes-meknes","children":["blenfaisance","hay-el-tath"]});
export const childModules = Object.freeze({"blenfaisance":"./blenfaisance/blenfaisance.js","hay-el-tath":"./hay-el-tath/hay-el-tath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
