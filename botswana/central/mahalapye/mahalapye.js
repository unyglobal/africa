// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalapye","repository":"africa","path":"botswana/central/mahalapye","depth":3,"parent":"botswana/central","children":["tshikinyega"]});
export const childModules = Object.freeze({"tshikinyega":"./tshikinyega/tshikinyega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
