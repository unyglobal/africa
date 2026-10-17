// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre-est","repository":"africa","path":"burkina-faso/centre-est","depth":2,"parent":"burkina-faso","children":["beguedo","bittou","cinkanse","garango","koupela","pouytenga","tenkodogo","zabre"]});
export const childModules = Object.freeze({"beguedo":"./beguedo/beguedo.js","bittou":"./bittou/bittou.js","cinkanse":"./cinkanse/cinkanse.js","garango":"./garango/garango.js","koupela":"./koupela/koupela.js","pouytenga":"./pouytenga/pouytenga.js","tenkodogo":"./tenkodogo/tenkodogo.js","zabre":"./zabre/zabre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
