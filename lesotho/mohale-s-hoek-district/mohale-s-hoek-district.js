// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mohale-s-hoek-district","repository":"africa","path":"lesotho/mohale-s-hoek-district","depth":2,"parent":"lesotho","children":["mohale-s-hoek"]});
export const childModules = Object.freeze({"mohale-s-hoek":"./mohale-s-hoek/mohale-s-hoek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
