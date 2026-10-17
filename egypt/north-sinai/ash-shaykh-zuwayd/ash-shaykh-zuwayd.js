// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ash-shaykh-zuwayd","repository":"africa","path":"egypt/north-sinai/ash-shaykh-zuwayd","depth":3,"parent":"egypt/north-sinai","children":["hayy-abu-khawwar","hayy-al-qawasimah"]});
export const childModules = Object.freeze({"hayy-abu-khawwar":"./hayy-abu-khawwar/hayy-abu-khawwar.js","hayy-al-qawasimah":"./hayy-al-qawasimah/hayy-al-qawasimah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
