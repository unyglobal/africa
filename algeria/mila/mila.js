// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mila","repository":"africa","path":"algeria/mila","depth":2,"parent":"algeria","children":["chelghoum-el-aid","fedj-m-zala","grarem","rouached","sidi-merouane","tadjenanet","telerghma"]});
export const childModules = Object.freeze({"chelghoum-el-aid":"./chelghoum-el-aid/chelghoum-el-aid.js","fedj-m-zala":"./fedj-m-zala/fedj-m-zala.js","grarem":"./grarem/grarem.js","rouached":"./rouached/rouached.js","sidi-merouane":"./sidi-merouane/sidi-merouane.js","tadjenanet":"./tadjenanet/tadjenanet.js","telerghma":"./telerghma/telerghma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
