// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gombe-state","repository":"africa","path":"nigeria/gombe-state","depth":2,"parent":"nigeria","children":["biliri","deba","dukku","garko","gombe","kumo","nafada","pindiga"]});
export const childModules = Object.freeze({"biliri":"./biliri/biliri.js","deba":"./deba/deba.js","dukku":"./dukku/dukku.js","garko":"./garko/garko.js","gombe":"./gombe/gombe.js","kumo":"./kumo/kumo.js","nafada":"./nafada/nafada.js","pindiga":"./pindiga/pindiga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
