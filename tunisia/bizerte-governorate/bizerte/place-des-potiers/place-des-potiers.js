// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"place-des-potiers","repository":"africa","path":"tunisia/bizerte-governorate/bizerte/place-des-potiers","depth":4,"parent":"tunisia/bizerte-governorate/bizerte","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
