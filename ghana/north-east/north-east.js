// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-east","repository":"africa","path":"ghana/north-east","depth":2,"parent":"ghana","children":["nalerigu"]});
export const childModules = Object.freeze({"nalerigu":"./nalerigu/nalerigu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
