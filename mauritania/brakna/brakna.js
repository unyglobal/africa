// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brakna","repository":"africa","path":"mauritania/brakna","depth":2,"parent":"mauritania","children":["aleg","bogue","magta-lahjar"]});
export const childModules = Object.freeze({"aleg":"./aleg/aleg.js","bogue":"./bogue/bogue.js","magta-lahjar":"./magta-lahjar/magta-lahjar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
