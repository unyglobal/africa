// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-said","repository":"africa","path":"egypt/port-said","depth":2,"parent":"egypt","children":["ad-dawahy","al-manakh","az-zuhur","bur-fu-ad"]});
export const childModules = Object.freeze({"ad-dawahy":"./ad-dawahy/ad-dawahy.js","al-manakh":"./al-manakh/al-manakh.js","az-zuhur":"./az-zuhur/az-zuhur.js","bur-fu-ad":"./bur-fu-ad/bur-fu-ad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
