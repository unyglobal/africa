// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guinea","repository":"africa","path":"guinea","depth":1,"parent":"","children":["boke-region","conakry","faranah","kankan-region","kindia","labe-region","mamou-region","nzerekore-region"]});
export const childModules = Object.freeze({"boke-region":"./boke-region/boke-region.js","conakry":"./conakry/conakry.js","faranah":"./faranah/faranah.js","kankan-region":"./kankan-region/kankan-region.js","kindia":"./kindia/kindia.js","labe-region":"./labe-region/labe-region.js","mamou-region":"./mamou-region/mamou-region.js","nzerekore-region":"./nzerekore-region/nzerekore-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
