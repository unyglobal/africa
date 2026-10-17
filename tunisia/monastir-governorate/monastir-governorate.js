// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monastir-governorate","repository":"africa","path":"tunisia/monastir-governorate","depth":2,"parent":"tunisia","children":["bekalta","bembla-et-mnara","djemmal","ksar-hellal","maatmeur","moknine","monastir","ouardenine","ouerdanine","sahline","skanes","teboulba","zeramedine"]});
export const childModules = Object.freeze({"bekalta":"./bekalta/bekalta.js","bembla-et-mnara":"./bembla-et-mnara/bembla-et-mnara.js","djemmal":"./djemmal/djemmal.js","ksar-hellal":"./ksar-hellal/ksar-hellal.js","maatmeur":"./maatmeur/maatmeur.js","moknine":"./moknine/moknine.js","monastir":"./monastir/monastir.js","ouardenine":"./ouardenine/ouardenine.js","ouerdanine":"./ouerdanine/ouerdanine.js","sahline":"./sahline/sahline.js","skanes":"./skanes/skanes.js","teboulba":"./teboulba/teboulba.js","zeramedine":"./zeramedine/zeramedine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
