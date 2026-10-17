// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kariakoo","repository":"africa","path":"tanzania/dar-es-salaam-region/dar-es-salaam/kariakoo","depth":4,"parent":"tanzania/dar-es-salaam-region/dar-es-salaam","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
