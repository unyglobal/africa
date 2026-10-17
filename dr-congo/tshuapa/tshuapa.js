// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tshuapa","repository":"africa","path":"dr-congo/tshuapa","depth":2,"parent":"dr-congo","children":["boende"]});
export const childModules = Object.freeze({"boende":"./boende/boende.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
