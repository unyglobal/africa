// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maseru","repository":"africa","path":"lesotho/maseru-district/maseru","depth":3,"parent":"lesotho/maseru-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
