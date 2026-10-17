// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morocco","repository":"africa","path":"morocco","depth":1,"parent":"","children":["beni-mellal-khenifra","casablanca-settat","draa-tafilalet","fes-meknes","guelmim-oued-noun","laayoune-sakia-el-hamra","marrakesh-safi","oriental","rabat-sale-kenitra","souss-massa","tanger-tetouan-al-hoceima"]});
export const childModules = Object.freeze({"beni-mellal-khenifra":"./beni-mellal-khenifra/beni-mellal-khenifra.js","casablanca-settat":"./casablanca-settat/casablanca-settat.js","draa-tafilalet":"./draa-tafilalet/draa-tafilalet.js","fes-meknes":"./fes-meknes/fes-meknes.js","guelmim-oued-noun":"./guelmim-oued-noun/guelmim-oued-noun.js","laayoune-sakia-el-hamra":"./laayoune-sakia-el-hamra/laayoune-sakia-el-hamra.js","marrakesh-safi":"./marrakesh-safi/marrakesh-safi.js","oriental":"./oriental/oriental.js","rabat-sale-kenitra":"./rabat-sale-kenitra/rabat-sale-kenitra.js","souss-massa":"./souss-massa/souss-massa.js","tanger-tetouan-al-hoceima":"./tanger-tetouan-al-hoceima/tanger-tetouan-al-hoceima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
