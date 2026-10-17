// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"douentza","repository":"africa","path":"mali/mopti/douentza","depth":3,"parent":"mali/mopti","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
