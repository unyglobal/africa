// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nkowakowa","repository":"africa","path":"south-africa/limpopo/nkowakowa","depth":3,"parent":"south-africa/limpopo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
