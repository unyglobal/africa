// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"selouane","repository":"africa","path":"morocco/oriental/selouane","depth":3,"parent":"morocco/oriental","children":["louahda"]});
export const childModules = Object.freeze({"louahda":"./louahda/louahda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
