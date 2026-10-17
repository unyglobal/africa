// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akebe-plaine","repository":"africa","path":"gabon/estuaire/libreville/akebe-plaine","depth":4,"parent":"gabon/estuaire/libreville","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
