// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mbuji-mayi","repository":"africa","path":"dr-congo/east-kasai/mbuji-mayi","depth":3,"parent":"dr-congo/east-kasai","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
