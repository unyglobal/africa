// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khomas-region","repository":"africa","path":"namibia/khomas-region","depth":2,"parent":"namibia","children":["katutura","windhoek"]});
export const childModules = Object.freeze({"katutura":"./katutura/katutura.js","windhoek":"./windhoek/windhoek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
