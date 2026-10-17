// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-region","repository":"africa","path":"malawi/central-region","depth":2,"parent":"malawi","children":["dedza","kasungu","lilongwe","mchinji","mponela","nkhotakota","ntcheu","salima"]});
export const childModules = Object.freeze({"dedza":"./dedza/dedza.js","kasungu":"./kasungu/kasungu.js","lilongwe":"./lilongwe/lilongwe.js","mchinji":"./mchinji/mchinji.js","mponela":"./mponela/mponela.js","nkhotakota":"./nkhotakota/nkhotakota.js","ntcheu":"./ntcheu/ntcheu.js","salima":"./salima/salima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
