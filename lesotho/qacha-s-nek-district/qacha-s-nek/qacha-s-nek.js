// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qacha-s-nek","repository":"africa","path":"lesotho/qacha-s-nek-district/qacha-s-nek","depth":3,"parent":"lesotho/qacha-s-nek-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
