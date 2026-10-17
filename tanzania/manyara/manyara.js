// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manyara","repository":"africa","path":"tanzania/manyara","depth":2,"parent":"tanzania","children":["babati","bashanet","basotu","dareda","dongobesh","galappo","katesh","magugu","mbulu","nangwa"]});
export const childModules = Object.freeze({"babati":"./babati/babati.js","bashanet":"./bashanet/bashanet.js","basotu":"./basotu/basotu.js","dareda":"./dareda/dareda.js","dongobesh":"./dongobesh/dongobesh.js","galappo":"./galappo/galappo.js","katesh":"./katesh/katesh.js","magugu":"./magugu/magugu.js","mbulu":"./mbulu/mbulu.js","nangwa":"./nangwa/nangwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
