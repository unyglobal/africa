// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kano-state","repository":"africa","path":"nigeria/kano-state","depth":2,"parent":"nigeria","children":["gaya","gwarzo","kano","rano","wudil"]});
export const childModules = Object.freeze({"gaya":"./gaya/gaya.js","gwarzo":"./gwarzo/gwarzo.js","kano":"./kano/kano.js","rano":"./rano/rano.js","wudil":"./wudil/wudil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
