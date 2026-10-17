// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ombella-m-poko","repository":"africa","path":"central-african-republic/ombella-m-poko","depth":2,"parent":"central-african-republic","children":["begoua","bimbo","boali","bossembele","yaloke"]});
export const childModules = Object.freeze({"begoua":"./begoua/begoua.js","bimbo":"./bimbo/bimbo.js","boali":"./boali/boali.js","bossembele":"./bossembele/bossembele.js","yaloke":"./yaloke/yaloke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
