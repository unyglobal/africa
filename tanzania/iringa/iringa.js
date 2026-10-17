// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iringa","repository":"africa","path":"tanzania/iringa","depth":2,"parent":"tanzania","children":["ilula","izazi"]});
export const childModules = Object.freeze({"ilula":"./ilula/ilula.js","izazi":"./izazi/izazi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
