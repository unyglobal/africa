// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ait-melloul","repository":"africa","path":"morocco/souss-massa/ait-melloul","depth":3,"parent":"morocco/souss-massa","children":["dauar-laarab","dissemert-ltarari","hay-lharch","hay-mauay-omar","hay-oubayrouk","lotissement-gouchar"]});
export const childModules = Object.freeze({"dauar-laarab":"./dauar-laarab/dauar-laarab.js","dissemert-ltarari":"./dissemert-ltarari/dissemert-ltarari.js","hay-lharch":"./hay-lharch/hay-lharch.js","hay-mauay-omar":"./hay-mauay-omar/hay-mauay-omar.js","hay-oubayrouk":"./hay-oubayrouk/hay-oubayrouk.js","lotissement-gouchar":"./lotissement-gouchar/lotissement-gouchar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
