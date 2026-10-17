// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sava","repository":"africa","path":"madagascar/sava","depth":2,"parent":"madagascar","children":["ampahana","andapa","antalaha","iharana","sambava"]});
export const childModules = Object.freeze({"ampahana":"./ampahana/ampahana.js","andapa":"./andapa/andapa.js","antalaha":"./antalaha/antalaha.js","iharana":"./iharana/iharana.js","sambava":"./sambava/sambava.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
