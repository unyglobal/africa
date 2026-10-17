// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sal","repository":"africa","path":"cape-verde/sal","depth":2,"parent":"cape-verde","children":["espargos"]});
export const childModules = Object.freeze({"espargos":"./espargos/espargos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
