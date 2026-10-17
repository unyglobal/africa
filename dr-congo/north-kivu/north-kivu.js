// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-kivu","repository":"africa","path":"dr-congo/north-kivu","depth":2,"parent":"dr-congo","children":["beni","butembo","goma","hyosha","kanyobagonga","katanda","katwa","kayna","kirumba","lubero","mangina","rutshuru","sake"]});
export const childModules = Object.freeze({"beni":"./beni/beni.js","butembo":"./butembo/butembo.js","goma":"./goma/goma.js","hyosha":"./hyosha/hyosha.js","kanyobagonga":"./kanyobagonga/kanyobagonga.js","katanda":"./katanda/katanda.js","katwa":"./katwa/katwa.js","kayna":"./kayna/kayna.js","kirumba":"./kirumba/kirumba.js","lubero":"./lubero/lubero.js","mangina":"./mangina/mangina.js","rutshuru":"./rutshuru/rutshuru.js","sake":"./sake/sake.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
