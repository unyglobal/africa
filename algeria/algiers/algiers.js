// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"algiers","repository":"africa","path":"algeria/algiers","depth":2,"parent":"algeria","children":["ain-benian","ain-taya","bab-ezzouar","baraki","birkhadem","bordj-el-bahri","bordj-el-kiffan","cheraga","dar-el-beida","douera","rais-hamidou","reghaia","rouiba","saoula","sidi-moussa","zeralda"]});
export const childModules = Object.freeze({"ain-benian":"./ain-benian/ain-benian.js","ain-taya":"./ain-taya/ain-taya.js","bab-ezzouar":"./bab-ezzouar/bab-ezzouar.js","baraki":"./baraki/baraki.js","birkhadem":"./birkhadem/birkhadem.js","bordj-el-bahri":"./bordj-el-bahri/bordj-el-bahri.js","bordj-el-kiffan":"./bordj-el-kiffan/bordj-el-kiffan.js","cheraga":"./cheraga/cheraga.js","dar-el-beida":"./dar-el-beida/dar-el-beida.js","douera":"./douera/douera.js","rais-hamidou":"./rais-hamidou/rais-hamidou.js","reghaia":"./reghaia/reghaia.js","rouiba":"./rouiba/rouiba.js","saoula":"./saoula/saoula.js","sidi-moussa":"./sidi-moussa/sidi-moussa.js","zeralda":"./zeralda/zeralda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
