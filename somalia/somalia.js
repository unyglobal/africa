// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"somalia","repository":"africa","path":"somalia","depth":1,"parent":"","children":["awdal","banaadir","bari","bay","galguduud","gedo","hiiraan","lower-juba","lower-shabeelle","middle-juba","middle-shabele","mudug","nugaal","sanaag","sool","togdheer","woqooyi-galbeed"]});
export const childModules = Object.freeze({"awdal":"./awdal/awdal.js","banaadir":"./banaadir/banaadir.js","bari":"./bari/bari.js","bay":"./bay/bay.js","galguduud":"./galguduud/galguduud.js","gedo":"./gedo/gedo.js","hiiraan":"./hiiraan/hiiraan.js","lower-juba":"./lower-juba/lower-juba.js","lower-shabeelle":"./lower-shabeelle/lower-shabeelle.js","middle-juba":"./middle-juba/middle-juba.js","middle-shabele":"./middle-shabele/middle-shabele.js","mudug":"./mudug/mudug.js","nugaal":"./nugaal/nugaal.js","sanaag":"./sanaag/sanaag.js","sool":"./sool/sool.js","togdheer":"./togdheer/togdheer.js","woqooyi-galbeed":"./woqooyi-galbeed/woqooyi-galbeed.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
