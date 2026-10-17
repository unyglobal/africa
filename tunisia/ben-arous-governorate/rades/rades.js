// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rades","repository":"africa","path":"tunisia/ben-arous-governorate/rades","depth":3,"parent":"tunisia/ben-arous-governorate","children":["cite-essadaka","cite-mohamed-ali","houmet-ouled-said","rades-menjil","saniet-el-hdiji"]});
export const childModules = Object.freeze({"cite-essadaka":"./cite-essadaka/cite-essadaka.js","cite-mohamed-ali":"./cite-mohamed-ali/cite-mohamed-ali.js","houmet-ouled-said":"./houmet-ouled-said/houmet-ouled-said.js","rades-menjil":"./rades-menjil/rades-menjil.js","saniet-el-hdiji":"./saniet-el-hdiji/saniet-el-hdiji.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
