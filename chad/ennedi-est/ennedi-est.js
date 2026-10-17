// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ennedi-est","repository":"africa","path":"chad/ennedi-est","depth":2,"parent":"chad","children":["amdjarass"]});
export const childModules = Object.freeze({"amdjarass":"./amdjarass/amdjarass.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
