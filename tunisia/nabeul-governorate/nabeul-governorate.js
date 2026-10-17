// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nabeul-governorate","repository":"africa","path":"tunisia/nabeul-governorate","depth":2,"parent":"tunisia","children":["beni-khalled","beni-khiar","dar-chabanne","douane","grombalia","hammamet","kelibia","korba","mennzel-bou-zelfa","menzel-temime","nabeul","soliman","takelsa"]});
export const childModules = Object.freeze({"beni-khalled":"./beni-khalled/beni-khalled.js","beni-khiar":"./beni-khiar/beni-khiar.js","dar-chabanne":"./dar-chabanne/dar-chabanne.js","douane":"./douane/douane.js","grombalia":"./grombalia/grombalia.js","hammamet":"./hammamet/hammamet.js","kelibia":"./kelibia/kelibia.js","korba":"./korba/korba.js","mennzel-bou-zelfa":"./mennzel-bou-zelfa/mennzel-bou-zelfa.js","menzel-temime":"./menzel-temime/menzel-temime.js","nabeul":"./nabeul/nabeul.js","soliman":"./soliman/soliman.js","takelsa":"./takelsa/takelsa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
