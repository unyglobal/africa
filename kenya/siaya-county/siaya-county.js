// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siaya-county","repository":"africa","path":"kenya/siaya-county","depth":2,"parent":"kenya","children":["bondo","siaya"]});
export const childModules = Object.freeze({"bondo":"./bondo/bondo.js","siaya":"./siaya/siaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
