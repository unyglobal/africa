// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uyo","repository":"africa","path":"nigeria/akwa-ibom-state/uyo","depth":3,"parent":"nigeria/akwa-ibom-state","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
