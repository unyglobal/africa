// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sodo","repository":"africa","path":"ethiopia/south-ethiopia-regional-state/sodo","depth":3,"parent":"ethiopia/south-ethiopia-regional-state","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
