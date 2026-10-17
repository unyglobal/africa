// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ben-guerir","repository":"africa","path":"morocco/marrakesh-safi/ben-guerir","depth":3,"parent":"morocco/marrakesh-safi","children":["el-hay-el-jadid","hay-afriqua","hay-el-farah","hay-el-quardi","hay-ennour","hay-essalam","pieste-mahor"]});
export const childModules = Object.freeze({"el-hay-el-jadid":"./el-hay-el-jadid/el-hay-el-jadid.js","hay-afriqua":"./hay-afriqua/hay-afriqua.js","hay-el-farah":"./hay-el-farah/hay-el-farah.js","hay-el-quardi":"./hay-el-quardi/hay-el-quardi.js","hay-ennour":"./hay-ennour/hay-ennour.js","hay-essalam":"./hay-essalam/hay-essalam.js","pieste-mahor":"./pieste-mahor/pieste-mahor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
