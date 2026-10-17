// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"busia-county","repository":"africa","path":"kenya/busia-county","depth":2,"parent":"kenya","children":["busia","lugulu","malaba"]});
export const childModules = Object.freeze({"busia":"./busia/busia.js","lugulu":"./lugulu/lugulu.js","malaba":"./malaba/malaba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
