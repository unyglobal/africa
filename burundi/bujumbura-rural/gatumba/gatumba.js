// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gatumba","repository":"africa","path":"burundi/bujumbura-rural/gatumba","depth":3,"parent":"burundi/bujumbura-rural","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
