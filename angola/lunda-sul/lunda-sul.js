// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lunda-sul","repository":"africa","path":"angola/lunda-sul","depth":2,"parent":"angola","children":["saurimo"]});
export const childModules = Object.freeze({"saurimo":"./saurimo/saurimo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
