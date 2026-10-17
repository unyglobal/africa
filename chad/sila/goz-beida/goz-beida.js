// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"goz-beida","repository":"africa","path":"chad/sila/goz-beida","depth":3,"parent":"chad/sila","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
