// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bissau","repository":"africa","path":"guinea-bissau/bissau","depth":2,"parent":"guinea-bissau","children":["bairro-militar","belem","contumo","luanda","missira","plaque","quelele","reino-de-antula","reino-de-bandim","santa-luzia","sintra-nema"]});
export const childModules = Object.freeze({"bairro-militar":"./bairro-militar/bairro-militar.js","belem":"./belem/belem.js","contumo":"./contumo/contumo.js","luanda":"./luanda/luanda.js","missira":"./missira/missira.js","plaque":"./plaque/plaque.js","quelele":"./quelele/quelele.js","reino-de-antula":"./reino-de-antula/reino-de-antula.js","reino-de-bandim":"./reino-de-bandim/reino-de-bandim.js","santa-luzia":"./santa-luzia/santa-luzia.js","sintra-nema":"./sintra-nema/sintra-nema.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
