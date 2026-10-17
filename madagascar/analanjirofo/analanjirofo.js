// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"analanjirofo","repository":"africa","path":"madagascar/analanjirofo","depth":2,"parent":"madagascar","children":["ambodifotatra","ambodimanga-ii","fenoarivo-atsinanana","mananara","maroantsetra","soanierana-ivongo","vavatenina"]});
export const childModules = Object.freeze({"ambodifotatra":"./ambodifotatra/ambodifotatra.js","ambodimanga-ii":"./ambodimanga-ii/ambodimanga-ii.js","fenoarivo-atsinanana":"./fenoarivo-atsinanana/fenoarivo-atsinanana.js","mananara":"./mananara/mananara.js","maroantsetra":"./maroantsetra/maroantsetra.js","soanierana-ivongo":"./soanierana-ivongo/soanierana-ivongo.js","vavatenina":"./vavatenina/vavatenina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
