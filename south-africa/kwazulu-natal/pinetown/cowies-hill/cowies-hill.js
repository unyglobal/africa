// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cowies-hill","repository":"africa","path":"south-africa/kwazulu-natal/pinetown/cowies-hill","depth":4,"parent":"south-africa/kwazulu-natal/pinetown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
