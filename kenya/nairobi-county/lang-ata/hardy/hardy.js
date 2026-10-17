// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hardy","repository":"africa","path":"kenya/nairobi-county/lang-ata/hardy","depth":4,"parent":"kenya/nairobi-county/lang-ata","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
