// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-kef","repository":"africa","path":"tunisia/kef-governorate/el-kef","depth":3,"parent":"tunisia/kef-governorate","children":["cite-ahmed-cherichi","cite-ain-mnekh","cite-el-andalous","cite-ennouhoudh","cite-erriadh","cite-essaada","cite-fourati","cite-harrouch","cite-ibn-khaldoun"]});
export const childModules = Object.freeze({"cite-ahmed-cherichi":"./cite-ahmed-cherichi/cite-ahmed-cherichi.js","cite-ain-mnekh":"./cite-ain-mnekh/cite-ain-mnekh.js","cite-el-andalous":"./cite-el-andalous/cite-el-andalous.js","cite-ennouhoudh":"./cite-ennouhoudh/cite-ennouhoudh.js","cite-erriadh":"./cite-erriadh/cite-erriadh.js","cite-essaada":"./cite-essaada/cite-essaada.js","cite-fourati":"./cite-fourati/cite-fourati.js","cite-harrouch":"./cite-harrouch/cite-harrouch.js","cite-ibn-khaldoun":"./cite-ibn-khaldoun/cite-ibn-khaldoun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
