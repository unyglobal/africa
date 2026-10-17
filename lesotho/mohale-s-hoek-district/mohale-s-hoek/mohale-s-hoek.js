// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mohale-s-hoek","repository":"africa","path":"lesotho/mohale-s-hoek-district/mohale-s-hoek","depth":3,"parent":"lesotho/mohale-s-hoek-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
