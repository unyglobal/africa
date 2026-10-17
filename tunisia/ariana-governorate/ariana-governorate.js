// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ariana-governorate","repository":"africa","path":"tunisia/ariana-governorate","depth":2,"parent":"tunisia","children":["aryanah","ettadhamen","galaat-el-andeless","mnihla","rawad","sukrah"]});
export const childModules = Object.freeze({"aryanah":"./aryanah/aryanah.js","ettadhamen":"./ettadhamen/ettadhamen.js","galaat-el-andeless":"./galaat-el-andeless/galaat-el-andeless.js","mnihla":"./mnihla/mnihla.js","rawad":"./rawad/rawad.js","sukrah":"./sukrah/sukrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
