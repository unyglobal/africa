// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bur-fu-ad","repository":"africa","path":"egypt/port-said/bur-fu-ad","depth":3,"parent":"egypt/port-said","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
