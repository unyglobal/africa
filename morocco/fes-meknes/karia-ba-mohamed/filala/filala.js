// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"filala","repository":"africa","path":"morocco/fes-meknes/karia-ba-mohamed/filala","depth":4,"parent":"morocco/fes-meknes/karia-ba-mohamed","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
