// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"labe-region","repository":"africa","path":"guinea/labe-region","depth":2,"parent":"guinea","children":["donghol-sigon","labe","tougue"]});
export const childModules = Object.freeze({"donghol-sigon":"./donghol-sigon/donghol-sigon.js","labe":"./labe/labe.js","tougue":"./tougue/tougue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
