// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gharbia","repository":"africa","path":"egypt/gharbia","depth":2,"parent":"egypt","children":["al-mahallah-al-kubra","as-santah","basyun","kafr-az-zayyat","qutur","samannud","tanta","zefta"]});
export const childModules = Object.freeze({"al-mahallah-al-kubra":"./al-mahallah-al-kubra/al-mahallah-al-kubra.js","as-santah":"./as-santah/as-santah.js","basyun":"./basyun/basyun.js","kafr-az-zayyat":"./kafr-az-zayyat/kafr-az-zayyat.js","qutur":"./qutur/qutur.js","samannud":"./samannud/samannud.js","tanta":"./tanta/tanta.js","zefta":"./zefta/zefta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
