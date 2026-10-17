// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tanger-tetouan-al-hoceima","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima","depth":2,"parent":"morocco","children":["al-hoceima","asilah","azla","bni-bouayach","chefchaouen","fnidek","gueznaia","imzouren","ksar-el-kebir","larache","martil","mdiq","ouezzane","tangier","tetouan","tirhanimine"]});
export const childModules = Object.freeze({"al-hoceima":"./al-hoceima/al-hoceima.js","asilah":"./asilah/asilah.js","azla":"./azla/azla.js","bni-bouayach":"./bni-bouayach/bni-bouayach.js","chefchaouen":"./chefchaouen/chefchaouen.js","fnidek":"./fnidek/fnidek.js","gueznaia":"./gueznaia/gueznaia.js","imzouren":"./imzouren/imzouren.js","ksar-el-kebir":"./ksar-el-kebir/ksar-el-kebir.js","larache":"./larache/larache.js","martil":"./martil/martil.js","mdiq":"./mdiq/mdiq.js","ouezzane":"./ouezzane/ouezzane.js","tangier":"./tangier/tangier.js","tetouan":"./tetouan/tetouan.js","tirhanimine":"./tirhanimine/tirhanimine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
