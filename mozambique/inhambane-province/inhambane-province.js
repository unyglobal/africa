// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inhambane-province","repository":"africa","path":"mozambique/inhambane-province","depth":2,"parent":"mozambique","children":["inhambane","massinga","maxixe","vilankulo"]});
export const childModules = Object.freeze({"inhambane":"./inhambane/inhambane.js","massinga":"./massinga/massinga.js","maxixe":"./maxixe/maxixe.js","vilankulo":"./vilankulo/vilankulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
