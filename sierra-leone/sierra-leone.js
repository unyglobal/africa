// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sierra-leone","repository":"africa","path":"sierra-leone","depth":1,"parent":"","children":["eastern-province","mile","north-west","northern-province","southern-province","western-area"]});
export const childModules = Object.freeze({"eastern-province":"./eastern-province/eastern-province.js","mile":"./mile/mile.js","north-west":"./north-west/north-west.js","northern-province":"./northern-province/northern-province.js","southern-province":"./southern-province/southern-province.js","western-area":"./western-area/western-area.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
