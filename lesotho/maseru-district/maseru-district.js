// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maseru-district","repository":"africa","path":"lesotho/maseru-district","depth":2,"parent":"lesotho","children":["maseru"]});
export const childModules = Object.freeze({"maseru":"./maseru/maseru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
