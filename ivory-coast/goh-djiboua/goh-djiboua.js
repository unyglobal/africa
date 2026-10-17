// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"goh-djiboua","repository":"africa","path":"ivory-coast/goh-djiboua","depth":2,"parent":"ivory-coast","children":["bayota","diegonefla","dignago","divo","doukouya","eremankono","gagnoa","galebre","gnatroa","guepaouo","guiberoua","hire","lakota","moussadougou","ogoudou","oume"]});
export const childModules = Object.freeze({"bayota":"./bayota/bayota.js","diegonefla":"./diegonefla/diegonefla.js","dignago":"./dignago/dignago.js","divo":"./divo/divo.js","doukouya":"./doukouya/doukouya.js","eremankono":"./eremankono/eremankono.js","gagnoa":"./gagnoa/gagnoa.js","galebre":"./galebre/galebre.js","gnatroa":"./gnatroa/gnatroa.js","guepaouo":"./guepaouo/guepaouo.js","guiberoua":"./guiberoua/guiberoua.js","hire":"./hire/hire.js","lakota":"./lakota/lakota.js","moussadougou":"./moussadougou/moussadougou.js","ogoudou":"./ogoudou/ogoudou.js","oume":"./oume/oume.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
