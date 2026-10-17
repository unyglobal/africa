// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meru-county","repository":"africa","path":"kenya/meru-county","depth":2,"parent":"kenya","children":["maua","meru"]});
export const childModules = Object.freeze({"maua":"./maua/maua.js","meru":"./meru/meru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
