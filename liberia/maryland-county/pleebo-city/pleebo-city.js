// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pleebo-city","repository":"africa","path":"liberia/maryland-county/pleebo-city","depth":3,"parent":"liberia/maryland-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
