// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baringo","repository":"africa","path":"kenya/baringo","depth":2,"parent":"kenya","children":["eldama-ravine","kabarnet"]});
export const childModules = Object.freeze({"eldama-ravine":"./eldama-ravine/eldama-ravine.js","kabarnet":"./kabarnet/kabarnet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
