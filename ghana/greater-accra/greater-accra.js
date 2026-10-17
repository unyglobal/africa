// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greater-accra","repository":"africa","path":"ghana/greater-accra","depth":2,"parent":"ghana","children":["accra","adenta","amanfrom","ashaiman","atsiaman","awoshi","dome","gbawe","lashibi","mandela","medina-estates","new-achimota","nungua","osu","sakumona","taifa","tema","tema-new-town","teshi-old-town"]});
export const childModules = Object.freeze({"accra":"./accra/accra.js","adenta":"./adenta/adenta.js","amanfrom":"./amanfrom/amanfrom.js","ashaiman":"./ashaiman/ashaiman.js","atsiaman":"./atsiaman/atsiaman.js","awoshi":"./awoshi/awoshi.js","dome":"./dome/dome.js","gbawe":"./gbawe/gbawe.js","lashibi":"./lashibi/lashibi.js","mandela":"./mandela/mandela.js","medina-estates":"./medina-estates/medina-estates.js","new-achimota":"./new-achimota/new-achimota.js","nungua":"./nungua/nungua.js","osu":"./osu/osu.js","sakumona":"./sakumona/sakumona.js","taifa":"./taifa/taifa.js","tema":"./tema/tema.js","tema-new-town":"./tema-new-town/tema-new-town.js","teshi-old-town":"./teshi-old-town/teshi-old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
