// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kihancha","repository":"africa","path":"kenya/migori-county/kihancha","depth":3,"parent":"kenya/migori-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
