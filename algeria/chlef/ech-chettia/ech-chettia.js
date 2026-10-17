// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ech-chettia","repository":"africa","path":"algeria/chlef/ech-chettia","depth":3,"parent":"algeria/chlef","children":["ech-chehaifiya","ech-chott"]});
export const childModules = Object.freeze({"ech-chehaifiya":"./ech-chehaifiya/ech-chehaifiya.js","ech-chott":"./ech-chott/ech-chott.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
