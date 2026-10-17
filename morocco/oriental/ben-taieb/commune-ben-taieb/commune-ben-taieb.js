// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"commune-ben-taieb","repository":"africa","path":"morocco/oriental/ben-taieb/commune-ben-taieb","depth":4,"parent":"morocco/oriental/ben-taieb","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
