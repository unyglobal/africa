// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oshikoto-region","repository":"africa","path":"namibia/oshikoto-region","depth":2,"parent":"namibia","children":["tsumeb"]});
export const childModules = Object.freeze({"tsumeb":"./tsumeb/tsumeb.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
