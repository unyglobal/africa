// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isiolo","repository":"africa","path":"kenya/isiolo-county/isiolo","depth":3,"parent":"kenya/isiolo-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
