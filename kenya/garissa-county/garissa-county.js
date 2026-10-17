// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"garissa-county","repository":"africa","path":"kenya/garissa-county","depth":2,"parent":"kenya","children":["garissa"]});
export const childModules = Object.freeze({"garissa":"./garissa/garissa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
