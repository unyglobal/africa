// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-tarf","repository":"africa","path":"algeria/el-tarf","depth":2,"parent":"algeria","children":["ben-mehidi","besbes","bou-hadjar","drean","el-kala"]});
export const childModules = Object.freeze({"ben-mehidi":"./ben-mehidi/ben-mehidi.js","besbes":"./besbes/besbes.js","bou-hadjar":"./bou-hadjar/bou-hadjar.js","drean":"./drean/drean.js","el-kala":"./el-kala/el-kala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
