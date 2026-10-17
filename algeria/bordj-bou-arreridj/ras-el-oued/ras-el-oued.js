// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ras-el-oued","repository":"africa","path":"algeria/bordj-bou-arreridj/ras-el-oued","depth":3,"parent":"algeria/bordj-bou-arreridj","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
