// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kericho-county","repository":"africa","path":"kenya/kericho-county","depth":2,"parent":"kenya","children":["kericho"]});
export const childModules = Object.freeze({"kericho":"./kericho/kericho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
