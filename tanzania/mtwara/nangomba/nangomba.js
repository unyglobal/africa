// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nangomba","repository":"africa","path":"tanzania/mtwara/nangomba","depth":3,"parent":"tanzania/mtwara","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
