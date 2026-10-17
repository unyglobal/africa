// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sidi-bel-abbes","repository":"africa","path":"algeria/sidi-bel-abbes","depth":2,"parent":"algeria","children":["ain-el-berd","sfizef"]});
export const childModules = Object.freeze({"ain-el-berd":"./ain-el-berd/ain-el-berd.js","sfizef":"./sfizef/sfizef.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
