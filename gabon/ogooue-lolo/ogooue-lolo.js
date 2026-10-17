// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ogooue-lolo","repository":"africa","path":"gabon/ogooue-lolo","depth":2,"parent":"gabon","children":["koulamoutou"]});
export const childModules = Object.freeze({"koulamoutou":"./koulamoutou/koulamoutou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
