// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"les-ministeres","repository":"africa","path":"morocco/rabat-sale-kenitra/rabat/les-ministeres","depth":4,"parent":"morocco/rabat-sale-kenitra/rabat","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
