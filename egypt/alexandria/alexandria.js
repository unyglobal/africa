// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alexandria","repository":"africa","path":"egypt/alexandria","depth":2,"parent":"egypt","children":["abu-qir","burj-al-arab","burj-al-arab-al-jadidah"]});
export const childModules = Object.freeze({"abu-qir":"./abu-qir/abu-qir.js","burj-al-arab":"./burj-al-arab/burj-al-arab.js","burj-al-arab-al-jadidah":"./burj-al-arab-al-jadidah/burj-al-arab-al-jadidah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
