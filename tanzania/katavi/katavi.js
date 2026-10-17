// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katavi","repository":"africa","path":"tanzania/katavi","depth":2,"parent":"tanzania","children":["mpanda","usevia"]});
export const childModules = Object.freeze({"mpanda":"./mpanda/mpanda.js","usevia":"./usevia/usevia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
