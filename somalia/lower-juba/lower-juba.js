// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-juba","repository":"africa","path":"somalia/lower-juba","depth":2,"parent":"somalia","children":["jamaame","kaambooni","kismayo"]});
export const childModules = Object.freeze({"jamaame":"./jamaame/jamaame.js","kaambooni":"./kaambooni/kaambooni.js","kismayo":"./kismayo/kismayo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
