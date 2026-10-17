// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lbachaouiya","repository":"africa","path":"morocco/casablanca-settat/benslimane/lbachaouiya","depth":4,"parent":"morocco/casablanca-settat/benslimane","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
