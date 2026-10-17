// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beni-suweif","repository":"africa","path":"egypt/beni-suweif","depth":2,"parent":"egypt","children":["al-fashn","bani-suwayf","biba","bush","ihnasiyah","ihnasya-al-madinah","new-bani-sewif-city","sumusta-al-waqf","sumusta-as-sultani"]});
export const childModules = Object.freeze({"al-fashn":"./al-fashn/al-fashn.js","bani-suwayf":"./bani-suwayf/bani-suwayf.js","biba":"./biba/biba.js","bush":"./bush/bush.js","ihnasiyah":"./ihnasiyah/ihnasiyah.js","ihnasya-al-madinah":"./ihnasya-al-madinah/ihnasya-al-madinah.js","new-bani-sewif-city":"./new-bani-sewif-city/new-bani-sewif-city.js","sumusta-al-waqf":"./sumusta-al-waqf/sumusta-al-waqf.js","sumusta-as-sultani":"./sumusta-as-sultani/sumusta-as-sultani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
