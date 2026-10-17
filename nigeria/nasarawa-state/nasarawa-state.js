// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nasarawa-state","repository":"africa","path":"nigeria/nasarawa-state","depth":2,"parent":"nigeria","children":["akwanga","doma","keffi","lafia","nasarawa","wamba"]});
export const childModules = Object.freeze({"akwanga":"./akwanga/akwanga.js","doma":"./doma/doma.js","keffi":"./keffi/keffi.js","lafia":"./lafia/lafia.js","nasarawa":"./nasarawa/nasarawa.js","wamba":"./wamba/wamba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
