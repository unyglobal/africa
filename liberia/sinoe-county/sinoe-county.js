// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sinoe-county","repository":"africa","path":"liberia/sinoe-county","depth":2,"parent":"liberia","children":["greenville"]});
export const childModules = Object.freeze({"greenville":"./greenville/greenville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
