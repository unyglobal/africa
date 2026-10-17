// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bafata","repository":"africa","path":"guinea-bissau/bafata","depth":2,"parent":"guinea-bissau","children":["xitole"]});
export const childModules = Object.freeze({"xitole":"./xitole/xitole.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
