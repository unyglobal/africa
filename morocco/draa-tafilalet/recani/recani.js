// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"recani","repository":"africa","path":"morocco/draa-tafilalet/recani","depth":3,"parent":"morocco/draa-tafilalet","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
