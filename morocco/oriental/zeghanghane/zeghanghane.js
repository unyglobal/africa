// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zeghanghane","repository":"africa","path":"morocco/oriental/zeghanghane","depth":3,"parent":"morocco/oriental","children":["iqasriouane","issekkajene"]});
export const childModules = Object.freeze({"iqasriouane":"./iqasriouane/iqasriouane.js","issekkajene":"./issekkajene/issekkajene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
