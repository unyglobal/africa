// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mbouda","repository":"africa","path":"cameroon/west/mbouda","depth":3,"parent":"cameroon/west","children":["bamelong"]});
export const childModules = Object.freeze({"bamelong":"./bamelong/bamelong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
