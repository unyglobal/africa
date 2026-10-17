// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cite-ennour-est","repository":"africa","path":"tunisia/sidi-bouzid-governorate/sidi-bouzid/cite-ennour-est","depth":4,"parent":"tunisia/sidi-bouzid-governorate/sidi-bouzid","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
