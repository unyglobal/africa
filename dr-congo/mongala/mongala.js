// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mongala","repository":"africa","path":"dr-congo/mongala","depth":2,"parent":"dr-congo","children":["binga","bumba","lisala"]});
export const childModules = Object.freeze({"binga":"./binga/binga.js","bumba":"./bumba/bumba.js","lisala":"./lisala/lisala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
