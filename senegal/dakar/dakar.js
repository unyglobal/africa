// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dakar","repository":"africa","path":"senegal/dakar","depth":2,"parent":"senegal","children":["bargny","bargny-guedj","bargny-ngoude","diamniadio","guediawaye","jaxaay-parcelle-niakoul-rap","le-plateau","n-diareme-limamoulaye","niakoul-rab","pikine","rufisque","rufisque-est","sebikhotane","yoff"]});
export const childModules = Object.freeze({"bargny":"./bargny/bargny.js","bargny-guedj":"./bargny-guedj/bargny-guedj.js","bargny-ngoude":"./bargny-ngoude/bargny-ngoude.js","diamniadio":"./diamniadio/diamniadio.js","guediawaye":"./guediawaye/guediawaye.js","jaxaay-parcelle-niakoul-rap":"./jaxaay-parcelle-niakoul-rap/jaxaay-parcelle-niakoul-rap.js","le-plateau":"./le-plateau/le-plateau.js","n-diareme-limamoulaye":"./n-diareme-limamoulaye/n-diareme-limamoulaye.js","niakoul-rab":"./niakoul-rab/niakoul-rab.js","pikine":"./pikine/pikine.js","rufisque":"./rufisque/rufisque.js","rufisque-est":"./rufisque-est/rufisque-est.js","sebikhotane":"./sebikhotane/sebikhotane.js","yoff":"./yoff/yoff.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
