// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suez","repository":"africa","path":"egypt/suez","depth":2,"parent":"egypt","children":["ain-sukhna","al-ayn-as-sukhnah"]});
export const childModules = Object.freeze({"ain-sukhna":"./ain-sukhna/ain-sukhna.js","al-ayn-as-sukhnah":"./al-ayn-as-sukhnah/al-ayn-as-sukhnah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
