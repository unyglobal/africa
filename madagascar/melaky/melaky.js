// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"melaky","repository":"africa","path":"madagascar/melaky","depth":2,"parent":"madagascar","children":["antsalova","maintirano"]});
export const childModules = Object.freeze({"antsalova":"./antsalova/antsalova.js","maintirano":"./maintirano/maintirano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
