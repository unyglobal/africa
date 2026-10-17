// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rukwa","repository":"africa","path":"tanzania/rukwa","depth":2,"parent":"tanzania","children":["chala","kirando","laela","matai","namanyere","sumbawanga"]});
export const childModules = Object.freeze({"chala":"./chala/chala.js","kirando":"./kirando/kirando.js","laela":"./laela/laela.js","matai":"./matai/matai.js","namanyere":"./namanyere/namanyere.js","sumbawanga":"./sumbawanga/sumbawanga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
