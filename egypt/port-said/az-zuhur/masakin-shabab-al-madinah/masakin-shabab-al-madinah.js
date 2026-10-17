// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masakin-shabab-al-madinah","repository":"africa","path":"egypt/port-said/az-zuhur/masakin-shabab-al-madinah","depth":4,"parent":"egypt/port-said/az-zuhur","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
