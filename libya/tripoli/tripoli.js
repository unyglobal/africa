// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tripoli","repository":"africa","path":"libya/tripoli","depth":2,"parent":"libya","children":["qasr-al-qarabulli","qasr-bin-ghashir","qasr-khiyar","tajura"]});
export const childModules = Object.freeze({"qasr-al-qarabulli":"./qasr-al-qarabulli/qasr-al-qarabulli.js","qasr-bin-ghashir":"./qasr-bin-ghashir/qasr-bin-ghashir.js","qasr-khiyar":"./qasr-khiyar/qasr-khiyar.js","tajura":"./tajura/tajura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
