// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"awdal","repository":"africa","path":"somalia/awdal","depth":2,"parent":"somalia","children":["baki","borama","ruqi","saylac"]});
export const childModules = Object.freeze({"baki":"./baki/baki.js","borama":"./borama/borama.js","ruqi":"./ruqi/ruqi.js","saylac":"./saylac/saylac.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
