// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wau","repository":"africa","path":"south-sudan/western-bahr-al-ghazal/wau","depth":3,"parent":"south-sudan/western-bahr-al-ghazal","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
