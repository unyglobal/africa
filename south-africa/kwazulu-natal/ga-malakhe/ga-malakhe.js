// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ga-malakhe","repository":"africa","path":"south-africa/kwazulu-natal/ga-malakhe","depth":3,"parent":"south-africa/kwazulu-natal","children":["gamalakhe-a"]});
export const childModules = Object.freeze({"gamalakhe-a":"./gamalakhe-a/gamalakhe-a.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
