// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-west","repository":"africa","path":"cameroon/north-west","depth":2,"parent":"cameroon","children":["bafut","bali","bamenda","fundong","kumbo","ndop","nkambe","oku","wum"]});
export const childModules = Object.freeze({"bafut":"./bafut/bafut.js","bali":"./bali/bali.js","bamenda":"./bamenda/bamenda.js","fundong":"./fundong/fundong.js","kumbo":"./kumbo/kumbo.js","ndop":"./ndop/ndop.js","nkambe":"./nkambe/nkambe.js","oku":"./oku/oku.js","wum":"./wum/wum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
