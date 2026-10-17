// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haut-ogooue","repository":"africa","path":"gabon/haut-ogooue","depth":2,"parent":"gabon","children":["franceville","moanda"]});
export const childModules = Object.freeze({"franceville":"./franceville/franceville.js","moanda":"./moanda/moanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
