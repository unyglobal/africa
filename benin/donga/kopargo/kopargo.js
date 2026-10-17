// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kopargo","repository":"africa","path":"benin/donga/kopargo","depth":3,"parent":"benin/donga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
