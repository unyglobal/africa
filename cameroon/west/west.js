// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west","repository":"africa","path":"cameroon/west","depth":2,"parent":"cameroon","children":["bafang","bafoussam","bandjoun","bangangte","dschang","foumban","foumbot","kekem","magba","mbouda","tonga"]});
export const childModules = Object.freeze({"bafang":"./bafang/bafang.js","bafoussam":"./bafoussam/bafoussam.js","bandjoun":"./bandjoun/bandjoun.js","bangangte":"./bangangte/bangangte.js","dschang":"./dschang/dschang.js","foumban":"./foumban/foumban.js","foumbot":"./foumbot/foumbot.js","kekem":"./kekem/kekem.js","magba":"./magba/magba.js","mbouda":"./mbouda/mbouda.js","tonga":"./tonga/tonga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
