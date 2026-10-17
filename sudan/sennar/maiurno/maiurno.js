// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maiurno","repository":"africa","path":"sudan/sennar/maiurno","depth":3,"parent":"sudan/sennar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
