// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diepsloot-west-6","repository":"africa","path":"south-africa/gauteng/diepsloot/diepsloot-west-6","depth":4,"parent":"south-africa/gauteng/diepsloot","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
