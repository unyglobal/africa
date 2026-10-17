// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burundi","repository":"africa","path":"burundi","depth":1,"parent":"","children":["bubanza","bujumbura-mairie","bujumbura-rural","bururi","cankuzo","cibitoke","gitega","kayanza","kirundo","ngozi","rumonge"]});
export const childModules = Object.freeze({"bubanza":"./bubanza/bubanza.js","bujumbura-mairie":"./bujumbura-mairie/bujumbura-mairie.js","bujumbura-rural":"./bujumbura-rural/bujumbura-rural.js","bururi":"./bururi/bururi.js","cankuzo":"./cankuzo/cankuzo.js","cibitoke":"./cibitoke/cibitoke.js","gitega":"./gitega/gitega.js","kayanza":"./kayanza/kayanza.js","kirundo":"./kirundo/kirundo.js","ngozi":"./ngozi/ngozi.js","rumonge":"./rumonge/rumonge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
