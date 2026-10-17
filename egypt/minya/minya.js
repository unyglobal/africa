// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minya","repository":"africa","path":"egypt/minya","depth":2,"parent":"egypt","children":["abu-qurqas","al-idwah","al-minya-al-jadidah","bani-mazar","bani-ubayd","dayr-mawas","maghaghah","mallawi","matay","samalut"]});
export const childModules = Object.freeze({"abu-qurqas":"./abu-qurqas/abu-qurqas.js","al-idwah":"./al-idwah/al-idwah.js","al-minya-al-jadidah":"./al-minya-al-jadidah/al-minya-al-jadidah.js","bani-mazar":"./bani-mazar/bani-mazar.js","bani-ubayd":"./bani-ubayd/bani-ubayd.js","dayr-mawas":"./dayr-mawas/dayr-mawas.js","maghaghah":"./maghaghah/maghaghah.js","mallawi":"./mallawi/mallawi.js","matay":"./matay/matay.js","samalut":"./samalut/samalut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
