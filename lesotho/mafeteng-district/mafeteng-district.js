// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mafeteng-district","repository":"africa","path":"lesotho/mafeteng-district","depth":2,"parent":"lesotho","children":["mafeteng"]});
export const childModules = Object.freeze({"mafeteng":"./mafeteng/mafeteng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
