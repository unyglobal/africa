// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keetmanshoop","repository":"africa","path":"namibia/karas-region/keetmanshoop","depth":3,"parent":"namibia/karas-region","children":["kroonlein"]});
export const childModules = Object.freeze({"kroonlein":"./kroonlein/kroonlein.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
