// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okigwe","repository":"africa","path":"nigeria/imo-state/okigwe","depth":3,"parent":"nigeria/imo-state","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
