// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erand","repository":"africa","path":"south-africa/gauteng/midrand/erand","depth":4,"parent":"south-africa/gauteng/midrand","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
