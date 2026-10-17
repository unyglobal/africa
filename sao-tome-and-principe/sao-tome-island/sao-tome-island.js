// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-tome-island","repository":"africa","path":"sao-tome-and-principe/sao-tome-island","depth":2,"parent":"sao-tome-and-principe","children":["sao-tome"]});
export const childModules = Object.freeze({"sao-tome":"./sao-tome/sao-tome.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
