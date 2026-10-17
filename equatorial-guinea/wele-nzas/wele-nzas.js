// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wele-nzas","repository":"africa","path":"equatorial-guinea/wele-nzas","depth":2,"parent":"equatorial-guinea","children":["aconibe","anisoc"]});
export const childModules = Object.freeze({"aconibe":"./aconibe/aconibe.js","anisoc":"./anisoc/anisoc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
