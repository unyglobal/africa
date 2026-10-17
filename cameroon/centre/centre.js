// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre","repository":"africa","path":"cameroon/centre","depth":2,"parent":"cameroon","children":["akonolinga","bafia","eseka","makak","mbalmayo","mbandjok","nanga-eboko","nkoteng","obala","okoa","yaounde"]});
export const childModules = Object.freeze({"akonolinga":"./akonolinga/akonolinga.js","bafia":"./bafia/bafia.js","eseka":"./eseka/eseka.js","makak":"./makak/makak.js","mbalmayo":"./mbalmayo/mbalmayo.js","mbandjok":"./mbandjok/mbandjok.js","nanga-eboko":"./nanga-eboko/nanga-eboko.js","nkoteng":"./nkoteng/nkoteng.js","obala":"./obala/obala.js","okoa":"./okoa/okoa.js","yaounde":"./yaounde/yaounde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
