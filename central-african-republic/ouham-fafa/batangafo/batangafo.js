// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batangafo","repository":"africa","path":"central-african-republic/ouham-fafa/batangafo","depth":3,"parent":"central-african-republic/ouham-fafa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
