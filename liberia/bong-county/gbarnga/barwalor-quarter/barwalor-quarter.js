// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barwalor-quarter","repository":"africa","path":"liberia/bong-county/gbarnga/barwalor-quarter","depth":4,"parent":"liberia/bong-county/gbarnga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
