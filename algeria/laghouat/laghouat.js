// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laghouat","repository":"africa","path":"algeria/laghouat","depth":2,"parent":"algeria","children":["aflou"]});
export const childModules = Object.freeze({"aflou":"./aflou/aflou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
