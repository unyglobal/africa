// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lofa-county","repository":"africa","path":"liberia/lofa-county","depth":2,"parent":"liberia","children":["foya-kamara","voinjama"]});
export const childModules = Object.freeze({"foya-kamara":"./foya-kamara/foya-kamara.js","voinjama":"./voinjama/voinjama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
