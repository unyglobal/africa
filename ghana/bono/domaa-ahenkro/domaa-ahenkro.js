// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"domaa-ahenkro","repository":"africa","path":"ghana/bono/domaa-ahenkro","depth":3,"parent":"ghana/bono","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
