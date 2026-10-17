// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moka","repository":"africa","path":"mauritius/moka","depth":2,"parent":"mauritius","children":["saint-pierre"]});
export const childModules = Object.freeze({"saint-pierre":"./saint-pierre/saint-pierre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
