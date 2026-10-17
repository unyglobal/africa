// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-al-qawasimah","repository":"africa","path":"egypt/north-sinai/ash-shaykh-zuwayd/hayy-al-qawasimah","depth":4,"parent":"egypt/north-sinai/ash-shaykh-zuwayd","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
