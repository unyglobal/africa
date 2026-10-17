// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"narok-county","repository":"africa","path":"kenya/narok-county","depth":2,"parent":"kenya","children":["narok"]});
export const childModules = Object.freeze({"narok":"./narok/narok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
