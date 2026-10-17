// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medenine-governorate","repository":"africa","path":"tunisia/medenine-governorate","depth":2,"parent":"tunisia","children":["ajim","ben-gardane","el-mgarsa","houmt-souk","medenine","midoun","zarzis"]});
export const childModules = Object.freeze({"ajim":"./ajim/ajim.js","ben-gardane":"./ben-gardane/ben-gardane.js","el-mgarsa":"./el-mgarsa/el-mgarsa.js","houmt-souk":"./houmt-souk/houmt-souk.js","medenine":"./medenine/medenine.js","midoun":"./midoun/midoun.js","zarzis":"./zarzis/zarzis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
