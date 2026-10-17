// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwango","repository":"africa","path":"dr-congo/kwango","depth":2,"parent":"dr-congo","children":["kasongo-lunda"]});
export const childModules = Object.freeze({"kasongo-lunda":"./kasongo-lunda/kasongo-lunda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
