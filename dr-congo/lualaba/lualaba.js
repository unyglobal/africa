// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lualaba","repository":"africa","path":"dr-congo/lualaba","depth":2,"parent":"dr-congo","children":["fungurume","kolwezi","malemba","mwene","tshilenge"]});
export const childModules = Object.freeze({"fungurume":"./fungurume/fungurume.js","kolwezi":"./kolwezi/kolwezi.js","malemba":"./malemba/malemba.js","mwene":"./mwene/mwene.js","tshilenge":"./tshilenge/tshilenge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
