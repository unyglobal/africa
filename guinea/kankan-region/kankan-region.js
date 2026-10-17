// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kankan-region","repository":"africa","path":"guinea/kankan-region","depth":2,"parent":"guinea","children":["douako","kankan","kerouane","kintinian","kouroussa","mandiana","siguiri"]});
export const childModules = Object.freeze({"douako":"./douako/douako.js","kankan":"./kankan/kankan.js","kerouane":"./kerouane/kerouane.js","kintinian":"./kintinian/kintinian.js","kouroussa":"./kouroussa/kouroussa.js","mandiana":"./mandiana/mandiana.js","siguiri":"./siguiri/siguiri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
