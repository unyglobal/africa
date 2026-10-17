// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maiduguri","repository":"africa","path":"nigeria/borno-state/maiduguri","depth":3,"parent":"nigeria/borno-state","children":["hausari","mafoni","shehuri"]});
export const childModules = Object.freeze({"hausari":"./hausari/hausari.js","mafoni":"./mafoni/mafoni.js","shehuri":"./shehuri/shehuri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
