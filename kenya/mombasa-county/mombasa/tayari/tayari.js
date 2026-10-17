// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tayari","repository":"africa","path":"kenya/mombasa-county/mombasa/tayari","depth":4,"parent":"kenya/mombasa-county/mombasa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
