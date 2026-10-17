// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sale","repository":"africa","path":"morocco/rabat-sale-kenitra/sale","depth":3,"parent":"morocco/rabat-sale-kenitra","children":["douar-jdid","hay-al-qods","hay-karima","tabriquet"]});
export const childModules = Object.freeze({"douar-jdid":"./douar-jdid/douar-jdid.js","hay-al-qods":"./hay-al-qods/hay-al-qods.js","hay-karima":"./hay-karima/hay-karima.js","tabriquet":"./tabriquet/tabriquet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
