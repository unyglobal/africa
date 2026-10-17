// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"espargos","repository":"africa","path":"cape-verde/sal/espargos","depth":3,"parent":"cape-verde/sal","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
