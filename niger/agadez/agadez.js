// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agadez","repository":"africa","path":"niger/agadez","depth":2,"parent":"niger","children":["alaghsas","arlit"]});
export const childModules = Object.freeze({"alaghsas":"./alaghsas/alaghsas.js","arlit":"./arlit/arlit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
