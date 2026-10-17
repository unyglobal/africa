// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bordj-bou-arreridj","repository":"africa","path":"algeria/bordj-bou-arreridj","depth":2,"parent":"algeria","children":["bordj-ghdir","bordj-zemoura","el-achir","mansourah","ras-el-oued"]});
export const childModules = Object.freeze({"bordj-ghdir":"./bordj-ghdir/bordj-ghdir.js","bordj-zemoura":"./bordj-zemoura/bordj-zemoura.js","el-achir":"./el-achir/el-achir.js","mansourah":"./mansourah/mansourah.js","ras-el-oued":"./ras-el-oued/ras-el-oued.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
