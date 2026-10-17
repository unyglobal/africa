// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-province","repository":"africa","path":"rwanda/southern-province","depth":2,"parent":"rwanda","children":["butare","gikongoro","gitarama","kamuhanda-ruyenzi","mugina","muhanga","nyanza","nzega","ruhango"]});
export const childModules = Object.freeze({"butare":"./butare/butare.js","gikongoro":"./gikongoro/gikongoro.js","gitarama":"./gitarama/gitarama.js","kamuhanda-ruyenzi":"./kamuhanda-ruyenzi/kamuhanda-ruyenzi.js","mugina":"./mugina/mugina.js","muhanga":"./muhanga/muhanga.js","nyanza":"./nyanza/nyanza.js","nzega":"./nzega/nzega.js","ruhango":"./ruhango/ruhango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
