// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"awasa","repository":"africa","path":"ethiopia/sidama-region/awasa","depth":3,"parent":"ethiopia/sidama-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
