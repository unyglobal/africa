// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oran","repository":"africa","path":"algeria/oran","depth":2,"parent":"algeria","children":["ain-el-bya","ain-el-turk","arzew","assi-bou-nif","bir-el-djir","bou-tlelis","en-nedjma","es-senia","gdyel","mers-el-kebir","sidi-ech-chahmi"]});
export const childModules = Object.freeze({"ain-el-bya":"./ain-el-bya/ain-el-bya.js","ain-el-turk":"./ain-el-turk/ain-el-turk.js","arzew":"./arzew/arzew.js","assi-bou-nif":"./assi-bou-nif/assi-bou-nif.js","bir-el-djir":"./bir-el-djir/bir-el-djir.js","bou-tlelis":"./bou-tlelis/bou-tlelis.js","en-nedjma":"./en-nedjma/en-nedjma.js","es-senia":"./es-senia/es-senia.js","gdyel":"./gdyel/gdyel.js","mers-el-kebir":"./mers-el-kebir/mers-el-kebir.js","sidi-ech-chahmi":"./sidi-ech-chahmi/sidi-ech-chahmi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
