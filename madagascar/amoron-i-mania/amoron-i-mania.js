// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amoron-i-mania","repository":"africa","path":"madagascar/amoron-i-mania","depth":2,"parent":"madagascar","children":["ambatofinandrahana","ambositra","fandriana"]});
export const childModules = Object.freeze({"ambatofinandrahana":"./ambatofinandrahana/ambatofinandrahana.js","ambositra":"./ambositra/ambositra.js","fandriana":"./fandriana/fandriana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
