// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-east","repository":"africa","path":"ghana/upper-east","depth":2,"parent":"ghana","children":["bawku","bolgatanga","navrongo"]});
export const childModules = Object.freeze({"bawku":"./bawku/bawku.js","bolgatanga":"./bolgatanga/bolgatanga.js","navrongo":"./navrongo/navrongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
