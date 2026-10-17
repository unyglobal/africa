// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"margibi-county","repository":"africa","path":"liberia/margibi-county","depth":2,"parent":"liberia","children":["harbel","kakata"]});
export const childModules = Object.freeze({"harbel":"./harbel/harbel.js","kakata":"./kakata/kakata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
