// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grand-gedeh-county","repository":"africa","path":"liberia/grand-gedeh-county","depth":2,"parent":"liberia","children":["zwedru"]});
export const childModules = Object.freeze({"zwedru":"./zwedru/zwedru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
