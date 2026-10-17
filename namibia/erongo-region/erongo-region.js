// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erongo-region","repository":"africa","path":"namibia/erongo-region","depth":2,"parent":"namibia","children":["swakopmund","walvis-bay"]});
export const childModules = Object.freeze({"swakopmund":"./swakopmund/swakopmund.js","walvis-bay":"./walvis-bay/walvis-bay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
