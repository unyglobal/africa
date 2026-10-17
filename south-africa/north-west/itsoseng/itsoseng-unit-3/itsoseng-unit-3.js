// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itsoseng-unit-3","repository":"africa","path":"south-africa/north-west/itsoseng/itsoseng-unit-3","depth":4,"parent":"south-africa/north-west/itsoseng","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
