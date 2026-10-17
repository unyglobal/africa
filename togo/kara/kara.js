// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kara","repository":"africa","path":"togo/kara","depth":2,"parent":"togo","children":["bafilo","bassar","niamtougou"]});
export const childModules = Object.freeze({"bafilo":"./bafilo/bafilo.js","bassar":"./bassar/bassar.js","niamtougou":"./niamtougou/niamtougou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
