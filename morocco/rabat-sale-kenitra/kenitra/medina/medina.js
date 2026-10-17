// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medina","repository":"africa","path":"morocco/rabat-sale-kenitra/kenitra/medina","depth":4,"parent":"morocco/rabat-sale-kenitra/kenitra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
