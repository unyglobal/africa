// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ihorombe","repository":"africa","path":"madagascar/ihorombe","depth":2,"parent":"madagascar","children":["ihosy","ivohibe"]});
export const childModules = Object.freeze({"ihosy":"./ihosy/ihosy.js","ivohibe":"./ivohibe/ivohibe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
