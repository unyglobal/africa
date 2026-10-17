// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-sinai","repository":"africa","path":"egypt/north-sinai","depth":2,"parent":"egypt","children":["arish","ash-shaykh-zuwayd","bi-r-al-abd","rafah"]});
export const childModules = Object.freeze({"arish":"./arish/arish.js","ash-shaykh-zuwayd":"./ash-shaykh-zuwayd/ash-shaykh-zuwayd.js","bi-r-al-abd":"./bi-r-al-abd/bi-r-al-abd.js","rafah":"./rafah/rafah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
