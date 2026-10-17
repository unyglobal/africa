// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wacha","repository":"africa","path":"ethiopia/south-west-ethiopia-peoples-region/wacha","depth":3,"parent":"ethiopia/south-west-ethiopia-peoples-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
