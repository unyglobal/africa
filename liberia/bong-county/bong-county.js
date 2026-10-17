// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bong-county","repository":"africa","path":"liberia/bong-county","depth":2,"parent":"liberia","children":["gbarnga"]});
export const childModules = Object.freeze({"gbarnga":"./gbarnga/gbarnga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
