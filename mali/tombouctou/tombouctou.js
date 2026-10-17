// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tombouctou","repository":"africa","path":"mali/tombouctou","depth":2,"parent":"mali","children":["dire","goundam","timbuktu"]});
export const childModules = Object.freeze({"dire":"./dire/dire.js","goundam":"./goundam/goundam.js","timbuktu":"./timbuktu/timbuktu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
