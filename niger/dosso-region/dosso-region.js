// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dosso-region","repository":"africa","path":"niger/dosso-region","depth":2,"parent":"niger","children":["birnin-gaoure","dogondoutchi","dosso","gaya"]});
export const childModules = Object.freeze({"birnin-gaoure":"./birnin-gaoure/birnin-gaoure.js","dogondoutchi":"./dogondoutchi/dogondoutchi.js","dosso":"./dosso/dosso.js","gaya":"./gaya/gaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
