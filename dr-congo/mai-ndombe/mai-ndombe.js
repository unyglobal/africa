// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mai-ndombe","repository":"africa","path":"dr-congo/mai-ndombe","depth":2,"parent":"dr-congo","children":["bolobo","dungu","inongo","kutu","mushie","nioki"]});
export const childModules = Object.freeze({"bolobo":"./bolobo/bolobo.js","dungu":"./dungu/dungu.js","inongo":"./inongo/inongo.js","kutu":"./kutu/kutu.js","mushie":"./mushie/mushie.js","nioki":"./nioki/nioki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
