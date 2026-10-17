// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-state","repository":"africa","path":"sudan/northern-state","depth":2,"parent":"sudan","children":["dongola","kuraymah","wadi-halfa"]});
export const childModules = Object.freeze({"dongola":"./dongola/dongola.js","kuraymah":"./kuraymah/kuraymah.js","wadi-halfa":"./wadi-halfa/wadi-halfa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
