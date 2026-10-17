// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montserrado-county","repository":"africa","path":"liberia/montserrado-county","depth":2,"parent":"liberia","children":["monrovia"]});
export const childModules = Object.freeze({"monrovia":"./monrovia/monrovia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
