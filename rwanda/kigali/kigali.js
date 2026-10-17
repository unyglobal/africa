// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kigali","repository":"africa","path":"rwanda/kigali","depth":2,"parent":"rwanda","children":["ndera"]});
export const childModules = Object.freeze({"ndera":"./ndera/ndera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
