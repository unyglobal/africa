// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nek-emte","repository":"africa","path":"ethiopia/oromiya/nek-emte","depth":3,"parent":"ethiopia/oromiya","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
