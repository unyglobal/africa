// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maryland-county","repository":"africa","path":"liberia/maryland-county","depth":2,"parent":"liberia","children":["harper","pleebo-city"]});
export const childModules = Object.freeze({"harper":"./harper/harper.js","pleebo-city":"./pleebo-city/pleebo-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
