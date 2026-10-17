// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karia-ba-mohamed","repository":"africa","path":"morocco/fes-meknes/karia-ba-mohamed","depth":3,"parent":"morocco/fes-meknes","children":["filala","hay-hamri","kharba","oulad-el-arbi-ben-hommane"]});
export const childModules = Object.freeze({"filala":"./filala/filala.js","hay-hamri":"./hay-hamri/hay-hamri.js","kharba":"./kharba/kharba.js","oulad-el-arbi-ben-hommane":"./oulad-el-arbi-ben-hommane/oulad-el-arbi-ben-hommane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
