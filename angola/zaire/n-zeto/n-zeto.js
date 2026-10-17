// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"n-zeto","repository":"africa","path":"angola/zaire/n-zeto","depth":3,"parent":"angola/zaire","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
