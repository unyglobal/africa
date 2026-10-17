// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lagunes-district","repository":"africa","path":"ivory-coast/lagunes-district","depth":2,"parent":"ivory-coast","children":["adzope","affery","agboville","ahouanou","akoupe","azaguie","becedi-brignan","bieby","dabou","gbolouville","grand-lahou","ndouci","nzianouan","rubino","tiassale"]});
export const childModules = Object.freeze({"adzope":"./adzope/adzope.js","affery":"./affery/affery.js","agboville":"./agboville/agboville.js","ahouanou":"./ahouanou/ahouanou.js","akoupe":"./akoupe/akoupe.js","azaguie":"./azaguie/azaguie.js","becedi-brignan":"./becedi-brignan/becedi-brignan.js","bieby":"./bieby/bieby.js","dabou":"./dabou/dabou.js","gbolouville":"./gbolouville/gbolouville.js","grand-lahou":"./grand-lahou/grand-lahou.js","ndouci":"./ndouci/ndouci.js","nzianouan":"./nzianouan/nzianouan.js","rubino":"./rubino/rubino.js","tiassale":"./tiassale/tiassale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
