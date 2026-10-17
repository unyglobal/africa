// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"byumba","repository":"africa","path":"rwanda/northern-province/byumba","depth":3,"parent":"rwanda/northern-province","children":["byumba-ville"]});
export const childModules = Object.freeze({"byumba-ville":"./byumba-ville/byumba-ville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
