// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"houmt-souk","repository":"africa","path":"tunisia/medenine-governorate/houmt-souk","depth":3,"parent":"tunisia/medenine-governorate","children":["djerba"]});
export const childModules = Object.freeze({"djerba":"./djerba/djerba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
