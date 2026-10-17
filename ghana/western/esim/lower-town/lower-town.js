// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-town","repository":"africa","path":"ghana/western/esim/lower-town","depth":4,"parent":"ghana/western/esim","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
