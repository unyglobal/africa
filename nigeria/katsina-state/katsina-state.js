// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katsina-state","repository":"africa","path":"nigeria/katsina-state","depth":2,"parent":"nigeria","children":["funtua","katsina","malumfashi"]});
export const childModules = Object.freeze({"funtua":"./funtua/funtua.js","katsina":"./katsina/katsina.js","malumfashi":"./malumfashi/malumfashi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
