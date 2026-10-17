// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-kordofan","repository":"africa","path":"sudan/north-kordofan","depth":2,"parent":"sudan","children":["ar-rahad","barah","el-obeid","umm-ruwaba"]});
export const childModules = Object.freeze({"ar-rahad":"./ar-rahad/ar-rahad.js","barah":"./barah/barah.js","el-obeid":"./el-obeid/el-obeid.js","umm-ruwaba":"./umm-ruwaba/umm-ruwaba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
