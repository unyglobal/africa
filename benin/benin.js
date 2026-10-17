// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benin","repository":"africa","path":"benin","depth":1,"parent":"","children":["alibori","atakora","atlantique","borgou","collines","donga","kouffo","littoral","mono","oueme","plateau","zou"]});
export const childModules = Object.freeze({"alibori":"./alibori/alibori.js","atakora":"./atakora/atakora.js","atlantique":"./atlantique/atlantique.js","borgou":"./borgou/borgou.js","collines":"./collines/collines.js","donga":"./donga/donga.js","kouffo":"./kouffo/kouffo.js","littoral":"./littoral/littoral.js","mono":"./mono/mono.js","oueme":"./oueme/oueme.js","plateau":"./plateau/plateau.js","zou":"./zou/zou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
