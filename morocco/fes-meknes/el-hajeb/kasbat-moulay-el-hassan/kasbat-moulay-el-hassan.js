// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kasbat-moulay-el-hassan","repository":"africa","path":"morocco/fes-meknes/el-hajeb/kasbat-moulay-el-hassan","depth":4,"parent":"morocco/fes-meknes/el-hajeb","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
