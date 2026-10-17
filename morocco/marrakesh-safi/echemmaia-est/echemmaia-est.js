// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"echemmaia-est","repository":"africa","path":"morocco/marrakesh-safi/echemmaia-est","depth":3,"parent":"morocco/marrakesh-safi","children":["dar-taliba","hay-echef-mbarek","hay-edrabla","hay-el-massira","hay-eltahouna"]});
export const childModules = Object.freeze({"dar-taliba":"./dar-taliba/dar-taliba.js","hay-echef-mbarek":"./hay-echef-mbarek/hay-echef-mbarek.js","hay-edrabla":"./hay-edrabla/hay-edrabla.js","hay-el-massira":"./hay-el-massira/hay-el-massira.js","hay-eltahouna":"./hay-eltahouna/hay-eltahouna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
