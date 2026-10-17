// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qoryooley","repository":"africa","path":"somalia/lower-shabeelle/qoryooley","depth":3,"parent":"somalia/lower-shabeelle","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
