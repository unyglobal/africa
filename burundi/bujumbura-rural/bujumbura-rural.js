// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bujumbura-rural","repository":"africa","path":"burundi/bujumbura-rural","depth":2,"parent":"burundi","children":["gatumba"]});
export const childModules = Object.freeze({"gatumba":"./gatumba/gatumba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
