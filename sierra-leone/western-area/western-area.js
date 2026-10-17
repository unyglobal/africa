// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-area","repository":"africa","path":"sierra-leone/western-area","depth":2,"parent":"sierra-leone","children":["freetown","goderich","waterloo"]});
export const childModules = Object.freeze({"freetown":"./freetown/freetown.js","goderich":"./goderich/goderich.js","waterloo":"./waterloo/waterloo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
