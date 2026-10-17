// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turkana-county","repository":"africa","path":"kenya/turkana-county","depth":2,"parent":"kenya","children":["kakuma","lodwar"]});
export const childModules = Object.freeze({"kakuma":"./kakuma/kakuma.js","lodwar":"./lodwar/lodwar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
