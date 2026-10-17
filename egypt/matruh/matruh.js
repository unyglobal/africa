// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matruh","repository":"africa","path":"egypt/matruh","depth":2,"parent":"egypt","children":["al-hammam","an-najaylah","as-sallum","el-dabaa","marsa-matruh","sidi-barani","siwah"]});
export const childModules = Object.freeze({"al-hammam":"./al-hammam/al-hammam.js","an-najaylah":"./an-najaylah/an-najaylah.js","as-sallum":"./as-sallum/as-sallum.js","el-dabaa":"./el-dabaa/el-dabaa.js","marsa-matruh":"./marsa-matruh/marsa-matruh.js","sidi-barani":"./sidi-barani/sidi-barani.js","siwah":"./siwah/siwah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
