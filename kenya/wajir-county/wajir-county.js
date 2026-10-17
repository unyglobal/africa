// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wajir-county","repository":"africa","path":"kenya/wajir-county","depth":2,"parent":"kenya","children":["habaswein","wajir"]});
export const childModules = Object.freeze({"habaswein":"./habaswein/habaswein.js","wajir":"./wajir/wajir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
