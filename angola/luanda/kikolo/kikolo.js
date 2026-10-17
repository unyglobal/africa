// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kikolo","repository":"africa","path":"angola/luanda/kikolo","depth":3,"parent":"angola/luanda","children":["caunda"]});
export const childModules = Object.freeze({"caunda":"./caunda/caunda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
