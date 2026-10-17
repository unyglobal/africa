// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tahoua-region","repository":"africa","path":"niger/tahoua-region","depth":2,"parent":"niger","children":["abalak","birni-n-konni","illela","madaoua","tahoua","tchin-tabaraden"]});
export const childModules = Object.freeze({"abalak":"./abalak/abalak.js","birni-n-konni":"./birni-n-konni/birni-n-konni.js","illela":"./illela/illela.js","madaoua":"./madaoua/madaoua.js","tahoua":"./tahoua/tahoua.js","tchin-tabaraden":"./tchin-tabaraden/tchin-tabaraden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
