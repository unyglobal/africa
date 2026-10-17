// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"comoe-district","repository":"africa","path":"ivory-coast/comoe-district","depth":2,"parent":"ivory-coast","children":["abengourou","aboisso","aboisso-comoe","adiake","agnibilekrou","ahigbe-koffikro","ande","arrah","bianouan","bongouanou","bonoua","ebilassokro","grand-bassam","m-batto","mafere","niable"]});
export const childModules = Object.freeze({"abengourou":"./abengourou/abengourou.js","aboisso":"./aboisso/aboisso.js","aboisso-comoe":"./aboisso-comoe/aboisso-comoe.js","adiake":"./adiake/adiake.js","agnibilekrou":"./agnibilekrou/agnibilekrou.js","ahigbe-koffikro":"./ahigbe-koffikro/ahigbe-koffikro.js","ande":"./ande/ande.js","arrah":"./arrah/arrah.js","bianouan":"./bianouan/bianouan.js","bongouanou":"./bongouanou/bongouanou.js","bonoua":"./bonoua/bonoua.js","ebilassokro":"./ebilassokro/ebilassokro.js","grand-bassam":"./grand-bassam/grand-bassam.js","m-batto":"./m-batto/m-batto.js","mafere":"./mafere/mafere.js","niable":"./niable/niable.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
