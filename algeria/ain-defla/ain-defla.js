// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ain-defla","repository":"africa","path":"algeria/ain-defla","depth":2,"parent":"algeria","children":["el-abadia","el-attaf","khemis-miliana","miliana"]});
export const childModules = Object.freeze({"el-abadia":"./el-abadia/el-abadia.js","el-attaf":"./el-attaf/el-attaf.js","khemis-miliana":"./khemis-miliana/khemis-miliana.js","miliana":"./miliana/miliana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
