// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jabal-al-gharbi","repository":"africa","path":"libya/jabal-al-gharbi","depth":2,"parent":"libya","children":["al-asabi-ah","al-qawasim","ar-rayayinah","gharyan","mizdah","yafran","zintan"]});
export const childModules = Object.freeze({"al-asabi-ah":"./al-asabi-ah/al-asabi-ah.js","al-qawasim":"./al-qawasim/al-qawasim.js","ar-rayayinah":"./ar-rayayinah/ar-rayayinah.js","gharyan":"./gharyan/gharyan.js","mizdah":"./mizdah/mizdah.js","yafran":"./yafran/yafran.js","zintan":"./zintan/zintan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
