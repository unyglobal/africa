// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ad-dawahy","repository":"africa","path":"egypt/port-said/ad-dawahy","depth":3,"parent":"egypt/port-said","children":["sakan-mintaqat-al-qabuti"]});
export const childModules = Object.freeze({"sakan-mintaqat-al-qabuti":"./sakan-mintaqat-al-qabuti/sakan-mintaqat-al-qabuti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
