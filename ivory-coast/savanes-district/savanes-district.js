// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savanes-district","repository":"africa","path":"ivory-coast/savanes-district","depth":2,"parent":"ivory-coast","children":["boundiali","diawala","dikodougou","ferkessedougou","kaouara","kolia","kong","korhogo","m-bengue","nambingue","nielle","ouangolodougou","tengrela"]});
export const childModules = Object.freeze({"boundiali":"./boundiali/boundiali.js","diawala":"./diawala/diawala.js","dikodougou":"./dikodougou/dikodougou.js","ferkessedougou":"./ferkessedougou/ferkessedougou.js","kaouara":"./kaouara/kaouara.js","kolia":"./kolia/kolia.js","kong":"./kong/kong.js","korhogo":"./korhogo/korhogo.js","m-bengue":"./m-bengue/m-bengue.js","nambingue":"./nambingue/nambingue.js","nielle":"./nielle/nielle.js","ouangolodougou":"./ouangolodougou/ouangolodougou.js","tengrela":"./tengrela/tengrela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
