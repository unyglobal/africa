// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-tome-and-principe","repository":"africa","path":"sao-tome-and-principe","depth":1,"parent":"","children":["sao-tome-island"]});
export const childModules = Object.freeze({"sao-tome-island":"./sao-tome-island/sao-tome-island.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
