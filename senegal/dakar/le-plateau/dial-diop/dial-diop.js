// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dial-diop","repository":"africa","path":"senegal/dakar/le-plateau/dial-diop","depth":4,"parent":"senegal/dakar/le-plateau","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
