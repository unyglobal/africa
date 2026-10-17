// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ebonyi-state","repository":"africa","path":"nigeria/ebonyi-state","depth":2,"parent":"nigeria","children":["abakaliki","afikpo","effium","ezza-ohu","isieke"]});
export const childModules = Object.freeze({"abakaliki":"./abakaliki/abakaliki.js","afikpo":"./afikpo/afikpo.js","effium":"./effium/effium.js","ezza-ohu":"./ezza-ohu/ezza-ohu.js","isieke":"./isieke/isieke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
