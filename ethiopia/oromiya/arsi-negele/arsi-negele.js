// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arsi-negele","repository":"africa","path":"ethiopia/oromiya/arsi-negele","depth":3,"parent":"ethiopia/oromiya","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
