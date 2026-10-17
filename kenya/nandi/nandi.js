// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nandi","repository":"africa","path":"kenya/nandi","depth":2,"parent":"kenya","children":["kapsabet"]});
export const childModules = Object.freeze({"kapsabet":"./kapsabet/kapsabet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
