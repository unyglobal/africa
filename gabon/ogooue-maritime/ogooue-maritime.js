// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ogooue-maritime","repository":"africa","path":"gabon/ogooue-maritime","depth":2,"parent":"gabon","children":["port-gentil"]});
export const childModules = Object.freeze({"port-gentil":"./port-gentil/port-gentil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
