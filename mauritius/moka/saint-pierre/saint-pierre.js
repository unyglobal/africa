// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-pierre","repository":"africa","path":"mauritius/moka/saint-pierre","depth":3,"parent":"mauritius/moka","children":["l-agrement","mont-fleury"]});
export const childModules = Object.freeze({"l-agrement":"./l-agrement/l-agrement.js","mont-fleury":"./mont-fleury/mont-fleury.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
