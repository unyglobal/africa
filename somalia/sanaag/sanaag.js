// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanaag","repository":"africa","path":"somalia/sanaag","depth":2,"parent":"somalia","children":["ceerigaabo"]});
export const childModules = Object.freeze({"ceerigaabo":"./ceerigaabo/ceerigaabo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
