// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-equatoria","repository":"africa","path":"south-sudan/western-equatoria","depth":2,"parent":"south-sudan","children":["yambio"]});
export const childModules = Object.freeze({"yambio":"./yambio/yambio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
