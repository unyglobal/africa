// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nord-ubangi","repository":"africa","path":"dr-congo/nord-ubangi","depth":2,"parent":"dr-congo","children":["businga","gbadolite"]});
export const childModules = Object.freeze({"businga":"./businga/businga.js","gbadolite":"./gbadolite/gbadolite.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
