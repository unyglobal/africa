// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"songwe","repository":"africa","path":"tanzania/songwe","depth":2,"parent":"tanzania","children":["mlowo","tunduma","vwawa"]});
export const childModules = Object.freeze({"mlowo":"./mlowo/mlowo.js","tunduma":"./tunduma/tunduma.js","vwawa":"./vwawa/vwawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
