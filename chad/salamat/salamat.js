// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salamat","repository":"africa","path":"chad/salamat","depth":2,"parent":"chad","children":["am-timan"]});
export const childModules = Object.freeze({"am-timan":"./am-timan/am-timan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
