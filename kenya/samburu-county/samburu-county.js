// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samburu-county","repository":"africa","path":"kenya/samburu-county","depth":2,"parent":"kenya","children":["maralal"]});
export const childModules = Object.freeze({"maralal":"./maralal/maralal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
