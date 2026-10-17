// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maputo-province","repository":"africa","path":"mozambique/maputo-province","depth":2,"parent":"mozambique","children":["boane","manhica","matola","ressano-garcia"]});
export const childModules = Object.freeze({"boane":"./boane/boane.js","manhica":"./manhica/manhica.js","matola":"./matola/matola.js","ressano-garcia":"./ressano-garcia/ressano-garcia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
