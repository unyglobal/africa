// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"senegal","repository":"africa","path":"senegal","depth":1,"parent":"","children":["dakar","diourbel-region","fatick","kaffrine","kaolack","kedougou","kolda","louga","matam","saint-louis","sedhiou","tambacounda","thies","ziguinchor"]});
export const childModules = Object.freeze({"dakar":"./dakar/dakar.js","diourbel-region":"./diourbel-region/diourbel-region.js","fatick":"./fatick/fatick.js","kaffrine":"./kaffrine/kaffrine.js","kaolack":"./kaolack/kaolack.js","kedougou":"./kedougou/kedougou.js","kolda":"./kolda/kolda.js","louga":"./louga/louga.js","matam":"./matam/matam.js","saint-louis":"./saint-louis/saint-louis.js","sedhiou":"./sedhiou/sedhiou.js","tambacounda":"./tambacounda/tambacounda.js","thies":"./thies/thies.js","ziguinchor":"./ziguinchor/ziguinchor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
