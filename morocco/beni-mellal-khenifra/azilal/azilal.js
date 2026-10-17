// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"azilal","repository":"africa","path":"morocco/beni-mellal-khenifra/azilal","depth":3,"parent":"morocco/beni-mellal-khenifra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
