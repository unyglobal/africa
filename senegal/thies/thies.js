// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thies","repository":"africa","path":"senegal/thies","depth":2,"parent":"senegal","children":["dougnane","joal","kayar","kbombole","khombole","mboro","mbour","mekhe","nguekhokh","pout","sali","thiadiaye","thies-nones","tivaouane"]});
export const childModules = Object.freeze({"dougnane":"./dougnane/dougnane.js","joal":"./joal/joal.js","kayar":"./kayar/kayar.js","kbombole":"./kbombole/kbombole.js","khombole":"./khombole/khombole.js","mboro":"./mboro/mboro.js","mbour":"./mbour/mbour.js","mekhe":"./mekhe/mekhe.js","nguekhokh":"./nguekhokh/nguekhokh.js","pout":"./pout/pout.js","sali":"./sali/sali.js","thiadiaye":"./thiadiaye/thiadiaye.js","thies-nones":"./thies-nones/thies-nones.js","tivaouane":"./tivaouane/tivaouane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
