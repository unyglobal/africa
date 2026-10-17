// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-louis","repository":"africa","path":"senegal/saint-louis","depth":2,"parent":"senegal","children":["dagana","ndioum","richard-toll"]});
export const childModules = Object.freeze({"dagana":"./dagana/dagana.js","ndioum":"./ndioum/ndioum.js","richard-toll":"./richard-toll/richard-toll.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
