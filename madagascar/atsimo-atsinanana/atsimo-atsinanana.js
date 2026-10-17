// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atsimo-atsinanana","repository":"africa","path":"madagascar/atsimo-atsinanana","depth":2,"parent":"madagascar","children":["farafangana","vangaindrano","vohipaho","vondrozo"]});
export const childModules = Object.freeze({"farafangana":"./farafangana/farafangana.js","vangaindrano":"./vangaindrano/vangaindrano.js","vohipaho":"./vohipaho/vohipaho.js","vondrozo":"./vondrozo/vondrozo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
