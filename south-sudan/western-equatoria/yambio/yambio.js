// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yambio","repository":"africa","path":"south-sudan/western-equatoria/yambio","depth":3,"parent":"south-sudan/western-equatoria","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
