// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kafr-el-sheikh","repository":"africa","path":"egypt/kafr-el-sheikh","depth":2,"parent":"egypt","children":["al-burj","al-hamul","ar-riyad","baltim","biyala","disuq","fuwwah","kafr-ash-shaykh","mutubas","qillin","sidi-ghazi","sidi-salim"]});
export const childModules = Object.freeze({"al-burj":"./al-burj/al-burj.js","al-hamul":"./al-hamul/al-hamul.js","ar-riyad":"./ar-riyad/ar-riyad.js","baltim":"./baltim/baltim.js","biyala":"./biyala/biyala.js","disuq":"./disuq/disuq.js","fuwwah":"./fuwwah/fuwwah.js","kafr-ash-shaykh":"./kafr-ash-shaykh/kafr-ash-shaykh.js","mutubas":"./mutubas/mutubas.js","qillin":"./qillin/qillin.js","sidi-ghazi":"./sidi-ghazi/sidi-ghazi.js","sidi-salim":"./sidi-salim/sidi-salim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
