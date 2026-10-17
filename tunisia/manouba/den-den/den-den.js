// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"den-den","repository":"africa","path":"tunisia/manouba/den-den","depth":3,"parent":"tunisia/manouba","children":["cite-3-aout","cite-el-inchirah"]});
export const childModules = Object.freeze({"cite-3-aout":"./cite-3-aout/cite-3-aout.js","cite-el-inchirah":"./cite-el-inchirah/cite-el-inchirah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
