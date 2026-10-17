// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-hajeb","repository":"africa","path":"morocco/fes-meknes/el-hajeb","depth":3,"parent":"morocco/fes-meknes","children":["chrichira","kasbat-moulay-el-hassan"]});
export const childModules = Object.freeze({"chrichira":"./chrichira/chrichira.js","kasbat-moulay-el-hassan":"./kasbat-moulay-el-hassan/kasbat-moulay-el-hassan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
