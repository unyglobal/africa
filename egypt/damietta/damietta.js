// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"damietta","repository":"africa","path":"egypt/damietta","depth":2,"parent":"egypt","children":["ar-rawdah","as-sarw","az-zarqa","dumyat-al-jadidah","faraskur","kafr-al-battikh","kafr-sa-d","mit-abu-ghalib"]});
export const childModules = Object.freeze({"ar-rawdah":"./ar-rawdah/ar-rawdah.js","as-sarw":"./as-sarw/as-sarw.js","az-zarqa":"./az-zarqa/az-zarqa.js","dumyat-al-jadidah":"./dumyat-al-jadidah/dumyat-al-jadidah.js","faraskur":"./faraskur/faraskur.js","kafr-al-battikh":"./kafr-al-battikh/kafr-al-battikh.js","kafr-sa-d":"./kafr-sa-d/kafr-sa-d.js","mit-abu-ghalib":"./mit-abu-ghalib/mit-abu-ghalib.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
