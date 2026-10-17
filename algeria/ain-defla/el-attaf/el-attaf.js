// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-attaf","repository":"africa","path":"algeria/ain-defla/el-attaf","depth":3,"parent":"algeria/ain-defla","children":["hai-salem"]});
export const childModules = Object.freeze({"hai-salem":"./hai-salem/hai-salem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
