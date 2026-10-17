// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouham-fafa","repository":"africa","path":"central-african-republic/ouham-fafa","depth":2,"parent":"central-african-republic","children":["batangafo","bouca","kabo"]});
export const childModules = Object.freeze({"batangafo":"./batangafo/batangafo.js","bouca":"./bouca/bouca.js","kabo":"./kabo/kabo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
