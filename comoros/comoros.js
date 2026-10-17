// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"comoros","repository":"africa","path":"comoros","depth":1,"parent":"","children":["anjouan","grande-comore","moheli"]});
export const childModules = Object.freeze({"anjouan":"./anjouan/anjouan.js","grande-comore":"./grande-comore/grande-comore.js","moheli":"./moheli/moheli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
