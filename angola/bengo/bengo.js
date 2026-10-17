// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bengo","repository":"africa","path":"angola/bengo","depth":2,"parent":"angola","children":["barra-do-dande","bula-atumba","cage-mazumbo","calumbo","canacassala","caxito","gama","gombe","mabubas","muxaluando","pango-aluquem","panguila","piri","ucua"]});
export const childModules = Object.freeze({"barra-do-dande":"./barra-do-dande/barra-do-dande.js","bula-atumba":"./bula-atumba/bula-atumba.js","cage-mazumbo":"./cage-mazumbo/cage-mazumbo.js","calumbo":"./calumbo/calumbo.js","canacassala":"./canacassala/canacassala.js","caxito":"./caxito/caxito.js","gama":"./gama/gama.js","gombe":"./gombe/gombe.js","mabubas":"./mabubas/mabubas.js","muxaluando":"./muxaluando/muxaluando.js","pango-aluquem":"./pango-aluquem/pango-aluquem.js","panguila":"./panguila/panguila.js","piri":"./piri/piri.js","ucua":"./ucua/ucua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
