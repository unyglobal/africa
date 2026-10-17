// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niassa-province","repository":"africa","path":"mozambique/niassa-province","depth":2,"parent":"mozambique","children":["cuamba","lichinga","mandimba"]});
export const childModules = Object.freeze({"cuamba":"./cuamba/cuamba.js","lichinga":"./lichinga/lichinga.js","mandimba":"./mandimba/mandimba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
