// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nsukka","repository":"africa","path":"nigeria/enugu-state/nsukka","depth":3,"parent":"nigeria/enugu-state","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
