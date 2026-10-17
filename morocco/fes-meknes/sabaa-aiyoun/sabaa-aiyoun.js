// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabaa-aiyoun","repository":"africa","path":"morocco/fes-meknes/sabaa-aiyoun","depth":3,"parent":"morocco/fes-meknes","children":["dar-ettaliba","hay-saada","hay-sidi-mohamed-el-moujahid"]});
export const childModules = Object.freeze({"dar-ettaliba":"./dar-ettaliba/dar-ettaliba.js","hay-saada":"./hay-saada/hay-saada.js","hay-sidi-mohamed-el-moujahid":"./hay-sidi-mohamed-el-moujahid/hay-sidi-mohamed-el-moujahid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
