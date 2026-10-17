// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monufia","repository":"africa","path":"egypt/monufia","depth":2,"parent":"egypt","children":["al-bajur","ash-shuhada","ashmun","birkat-as-sab","kafr-shukr","munuf","quwaysina","shibin-al-kawm","sirs-al-layyanah","tala"]});
export const childModules = Object.freeze({"al-bajur":"./al-bajur/al-bajur.js","ash-shuhada":"./ash-shuhada/ash-shuhada.js","ashmun":"./ashmun/ashmun.js","birkat-as-sab":"./birkat-as-sab/birkat-as-sab.js","kafr-shukr":"./kafr-shukr/kafr-shukr.js","munuf":"./munuf/munuf.js","quwaysina":"./quwaysina/quwaysina.js","shibin-al-kawm":"./shibin-al-kawm/shibin-al-kawm.js","sirs-al-layyanah":"./sirs-al-layyanah/sirs-al-layyanah.js","tala":"./tala/tala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
