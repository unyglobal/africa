// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayelsa-state","repository":"africa","path":"nigeria/bayelsa-state","depth":2,"parent":"nigeria","children":["ogbia","yenagoa"]});
export const childModules = Object.freeze({"ogbia":"./ogbia/ogbia.js","yenagoa":"./yenagoa/yenagoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
