// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kiambu-county","repository":"africa","path":"kenya/kiambu-county","depth":2,"parent":"kenya","children":["juja","kiambu","kikuyu","limuru","ruiru"]});
export const childModules = Object.freeze({"juja":"./juja/juja.js","kiambu":"./kiambu/kiambu.js","kikuyu":"./kikuyu/kikuyu.js","limuru":"./limuru/limuru.js","ruiru":"./ruiru/ruiru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
