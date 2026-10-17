// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oujda","repository":"africa","path":"morocco/oriental/oujda","depth":3,"parent":"morocco/oriental","children":["hay-boulouiz","hay-broukech","hay-mbassou"]});
export const childModules = Object.freeze({"hay-boulouiz":"./hay-boulouiz/hay-boulouiz.js","hay-broukech":"./hay-broukech/hay-broukech.js","hay-mbassou":"./hay-mbassou/hay-mbassou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
