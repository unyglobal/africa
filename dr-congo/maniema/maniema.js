// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maniema","repository":"africa","path":"dr-congo/maniema","depth":2,"parent":"dr-congo","children":["kampene","kasongo","kindu"]});
export const childModules = Object.freeze({"kampene":"./kampene/kampene.js","kasongo":"./kasongo/kasongo.js","kindu":"./kindu/kindu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
