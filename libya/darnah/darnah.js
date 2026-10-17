// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"darnah","repository":"africa","path":"libya/darnah","depth":2,"parent":"libya","children":["al-qubbah"]});
export const childModules = Object.freeze({"al-qubbah":"./al-qubbah/al-qubbah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
