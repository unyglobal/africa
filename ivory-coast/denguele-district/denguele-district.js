// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"denguele-district","repository":"africa","path":"ivory-coast/denguele-district","depth":2,"parent":"ivory-coast","children":["odienne"]});
export const childModules = Object.freeze({"odienne":"./odienne/odienne.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
