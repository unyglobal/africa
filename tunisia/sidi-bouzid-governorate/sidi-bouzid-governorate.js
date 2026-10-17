// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sidi-bouzid-governorate","repository":"africa","path":"tunisia/sidi-bouzid-governorate","depth":2,"parent":"tunisia","children":["sidi-bouzid"]});
export const childModules = Object.freeze({"sidi-bouzid":"./sidi-bouzid/sidi-bouzid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
