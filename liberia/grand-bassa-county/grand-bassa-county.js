// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grand-bassa-county","repository":"africa","path":"liberia/grand-bassa-county","depth":2,"parent":"liberia","children":["buchanan"]});
export const childModules = Object.freeze({"buchanan":"./buchanan/buchanan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
