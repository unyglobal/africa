// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"debub","repository":"africa","path":"eritrea/debub","depth":2,"parent":"eritrea","children":["af-abet","mendefera"]});
export const childModules = Object.freeze({"af-abet":"./af-abet/af-abet.js","mendefera":"./mendefera/mendefera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
