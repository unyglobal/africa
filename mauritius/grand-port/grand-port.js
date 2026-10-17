// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grand-port","repository":"africa","path":"mauritius/grand-port","depth":2,"parent":"mauritius","children":["mahebourg"]});
export const childModules = Object.freeze({"mahebourg":"./mahebourg/mahebourg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
