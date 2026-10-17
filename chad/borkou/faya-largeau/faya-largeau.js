// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faya-largeau","repository":"africa","path":"chad/borkou/faya-largeau","depth":3,"parent":"chad/borkou","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
