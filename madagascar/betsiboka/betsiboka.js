// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"betsiboka","repository":"africa","path":"madagascar/betsiboka","depth":2,"parent":"madagascar","children":["maevatanana","tsaratanana"]});
export const childModules = Object.freeze({"maevatanana":"./maevatanana/maevatanana.js","tsaratanana":"./tsaratanana/tsaratanana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
