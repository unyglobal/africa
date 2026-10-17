// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"byumba-ville","repository":"africa","path":"rwanda/northern-province/byumba/byumba-ville","depth":4,"parent":"rwanda/northern-province/byumba","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
