// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-valley","repository":"africa","path":"egypt/new-valley","depth":2,"parent":"egypt","children":["al-kharijah","al-kharjah","at-tarif","mut"]});
export const childModules = Object.freeze({"al-kharijah":"./al-kharijah/al-kharijah.js","al-kharjah":"./al-kharjah/al-kharjah.js","at-tarif":"./at-tarif/at-tarif.js","mut":"./mut/mut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
