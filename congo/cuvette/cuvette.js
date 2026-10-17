// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuvette","repository":"africa","path":"congo/cuvette","depth":2,"parent":"congo","children":["makoua","mossaka","owando","oyo"]});
export const childModules = Object.freeze({"makoua":"./makoua/makoua.js","mossaka":"./mossaka/mossaka.js","owando":"./owando/owando.js","oyo":"./oyo/oyo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
