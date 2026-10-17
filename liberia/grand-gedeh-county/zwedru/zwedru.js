// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zwedru","repository":"africa","path":"liberia/grand-gedeh-county/zwedru","depth":3,"parent":"liberia/grand-gedeh-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
