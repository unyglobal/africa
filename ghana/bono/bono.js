// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bono","repository":"africa","path":"ghana/bono","depth":2,"parent":"ghana","children":["atronie","berekum","domaa-ahenkro","japekrom","nsoatre","sunyani","wankyi"]});
export const childModules = Object.freeze({"atronie":"./atronie/atronie.js","berekum":"./berekum/berekum.js","domaa-ahenkro":"./domaa-ahenkro/domaa-ahenkro.js","japekrom":"./japekrom/japekrom.js","nsoatre":"./nsoatre/nsoatre.js","sunyani":"./sunyani/sunyani.js","wankyi":"./wankyi/wankyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
