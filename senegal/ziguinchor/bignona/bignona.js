// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bignona","repository":"africa","path":"senegal/ziguinchor/bignona","depth":3,"parent":"senegal/ziguinchor","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
