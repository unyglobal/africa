// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gamalakhe-a","repository":"africa","path":"south-africa/kwazulu-natal/ga-malakhe/gamalakhe-a","depth":4,"parent":"south-africa/kwazulu-natal/ga-malakhe","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
