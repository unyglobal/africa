// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qasr-bin-ghashir","repository":"africa","path":"libya/tripoli/qasr-bin-ghashir","depth":3,"parent":"libya/tripoli","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
