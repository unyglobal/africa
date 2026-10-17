// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asyut","repository":"africa","path":"egypt/asyut","depth":2,"parent":"egypt","children":["abnub","abu-tij","al-badari","al-ghanayim","al-qusiyah","an-nasiriyah","as-sahil","assiut","dayrut","manfalut","sidfa"]});
export const childModules = Object.freeze({"abnub":"./abnub/abnub.js","abu-tij":"./abu-tij/abu-tij.js","al-badari":"./al-badari/al-badari.js","al-ghanayim":"./al-ghanayim/al-ghanayim.js","al-qusiyah":"./al-qusiyah/al-qusiyah.js","an-nasiriyah":"./an-nasiriyah/an-nasiriyah.js","as-sahil":"./as-sahil/as-sahil.js","assiut":"./assiut/assiut.js","dayrut":"./dayrut/dayrut.js","manfalut":"./manfalut/manfalut.js","sidfa":"./sidfa/sidfa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
