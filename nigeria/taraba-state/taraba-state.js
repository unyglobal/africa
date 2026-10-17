// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taraba-state","repository":"africa","path":"nigeria/taraba-state","depth":2,"parent":"nigeria","children":["beli","gembu","ibi","jalingo","wukari"]});
export const childModules = Object.freeze({"beli":"./beli/beli.js","gembu":"./gembu/gembu.js","ibi":"./ibi/ibi.js","jalingo":"./jalingo/jalingo.js","wukari":"./wukari/wukari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
