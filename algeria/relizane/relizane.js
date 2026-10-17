// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"relizane","repository":"africa","path":"algeria/relizane","depth":2,"parent":"algeria","children":["ammi-moussa","djidiouia","mazouna","oued-rhiou","zemoura"]});
export const childModules = Object.freeze({"ammi-moussa":"./ammi-moussa/ammi-moussa.js","djidiouia":"./djidiouia/djidiouia.js","mazouna":"./mazouna/mazouna.js","oued-rhiou":"./oued-rhiou/oued-rhiou.js","zemoura":"./zemoura/zemoura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
