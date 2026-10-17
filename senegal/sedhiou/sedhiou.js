// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sedhiou","repository":"africa","path":"senegal/sedhiou","depth":2,"parent":"senegal","children":["goudomp"]});
export const childModules = Object.freeze({"goudomp":"./goudomp/goudomp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
