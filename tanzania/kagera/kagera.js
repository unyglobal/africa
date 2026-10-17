// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kagera","repository":"africa","path":"tanzania/kagera","depth":2,"parent":"tanzania","children":["biharamulo","bugarama","bukoba","kabanga","kakunyu","kamachumu","kassambya","katerero","mutukula","ngara","nshamba","nsunga","rulenge"]});
export const childModules = Object.freeze({"biharamulo":"./biharamulo/biharamulo.js","bugarama":"./bugarama/bugarama.js","bukoba":"./bukoba/bukoba.js","kabanga":"./kabanga/kabanga.js","kakunyu":"./kakunyu/kakunyu.js","kamachumu":"./kamachumu/kamachumu.js","kassambya":"./kassambya/kassambya.js","katerero":"./katerero/katerero.js","mutukula":"./mutukula/mutukula.js","ngara":"./ngara/ngara.js","nshamba":"./nshamba/nshamba.js","nsunga":"./nsunga/nsunga.js","rulenge":"./rulenge/rulenge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
