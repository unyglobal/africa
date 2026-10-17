// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berea","repository":"africa","path":"lesotho/berea","depth":2,"parent":"lesotho","children":["mabote","teyateyaneng"]});
export const childModules = Object.freeze({"mabote":"./mabote/mabote.js","teyateyaneng":"./teyateyaneng/teyateyaneng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
