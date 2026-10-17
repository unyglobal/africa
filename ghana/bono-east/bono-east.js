// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bono-east","repository":"africa","path":"ghana/bono-east","depth":2,"parent":"ghana","children":["atebubu","kintampo","nkoranza","techiman","yegyi"]});
export const childModules = Object.freeze({"atebubu":"./atebubu/atebubu.js","kintampo":"./kintampo/kintampo.js","nkoranza":"./nkoranza/nkoranza.js","techiman":"./techiman/techiman.js","yegyi":"./yegyi/yegyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
