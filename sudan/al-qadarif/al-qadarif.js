// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qadarif","repository":"africa","path":"sudan/al-qadarif","depth":2,"parent":"sudan","children":["al-fashaqah","al-faw","al-hawatah","doka","khashm-al-qirbah"]});
export const childModules = Object.freeze({"al-fashaqah":"./al-fashaqah/al-fashaqah.js","al-faw":"./al-faw/al-faw.js","al-hawatah":"./al-hawatah/al-hawatah.js","doka":"./doka/doka.js","khashm-al-qirbah":"./khashm-al-qirbah/khashm-al-qirbah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
