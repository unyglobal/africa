// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tlemcen","repository":"africa","path":"algeria/tlemcen","depth":2,"parent":"algeria","children":["beni-mester","bensekrane","chetouane","ghazaouet","hennaya","maghnia","mansoura","nedroma","ouled-mimoun","remchi","sebdou","sidi-abdelli"]});
export const childModules = Object.freeze({"beni-mester":"./beni-mester/beni-mester.js","bensekrane":"./bensekrane/bensekrane.js","chetouane":"./chetouane/chetouane.js","ghazaouet":"./ghazaouet/ghazaouet.js","hennaya":"./hennaya/hennaya.js","maghnia":"./maghnia/maghnia.js","mansoura":"./mansoura/mansoura.js","nedroma":"./nedroma/nedroma.js","ouled-mimoun":"./ouled-mimoun/ouled-mimoun.js","remchi":"./remchi/remchi.js","sebdou":"./sebdou/sebdou.js","sidi-abdelli":"./sidi-abdelli/sidi-abdelli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
