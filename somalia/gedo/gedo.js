// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gedo","repository":"africa","path":"somalia/gedo","depth":2,"parent":"somalia","children":["baardheere","beled-hawo","dhamas","luuq"]});
export const childModules = Object.freeze({"baardheere":"./baardheere/baardheere.js","beled-hawo":"./beled-hawo/beled-hawo.js","dhamas":"./dhamas/dhamas.js","luuq":"./luuq/luuq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
