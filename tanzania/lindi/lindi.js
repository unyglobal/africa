// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lindi","repository":"africa","path":"tanzania/lindi","depth":2,"parent":"tanzania","children":["kilwa-masoko","liwale","nachingwea","nyangao","ruangwa"]});
export const childModules = Object.freeze({"kilwa-masoko":"./kilwa-masoko/kilwa-masoko.js","liwale":"./liwale/liwale.js","nachingwea":"./nachingwea/nachingwea.js","nyangao":"./nyangao/nyangao.js","ruangwa":"./ruangwa/ruangwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
