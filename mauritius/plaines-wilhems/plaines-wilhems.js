// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plaines-wilhems","repository":"africa","path":"mauritius/plaines-wilhems","depth":2,"parent":"mauritius","children":["beau-bassin-rose-hill","curepipe","quatre-bornes","vacoas"]});
export const childModules = Object.freeze({"beau-bassin-rose-hill":"./beau-bassin-rose-hill/beau-bassin-rose-hill.js","curepipe":"./curepipe/curepipe.js","quatre-bornes":"./quatre-bornes/quatre-bornes.js","vacoas":"./vacoas/vacoas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
