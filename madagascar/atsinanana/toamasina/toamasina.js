// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toamasina","repository":"africa","path":"madagascar/atsinanana/toamasina","depth":3,"parent":"madagascar/atsinanana","children":["tanamakoa"]});
export const childModules = Object.freeze({"tanamakoa":"./tanamakoa/tanamakoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
