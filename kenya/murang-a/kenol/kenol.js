// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kenol","repository":"africa","path":"kenya/murang-a/kenol","depth":3,"parent":"kenya/murang-a","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
