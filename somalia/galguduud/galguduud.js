// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"galguduud","repository":"africa","path":"somalia/galguduud","depth":2,"parent":"somalia","children":["balanbale","cabudwaaq","ceeldheer","dhabad"]});
export const childModules = Object.freeze({"balanbale":"./balanbale/balanbale.js","cabudwaaq":"./cabudwaaq/cabudwaaq.js","ceeldheer":"./ceeldheer/ceeldheer.js","dhabad":"./dhabad/dhabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
