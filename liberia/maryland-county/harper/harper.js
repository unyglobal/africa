// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harper","repository":"africa","path":"liberia/maryland-county/harper","depth":3,"parent":"liberia/maryland-county","children":["hoffman-station"]});
export const childModules = Object.freeze({"hoffman-station":"./hoffman-station/hoffman-station.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
