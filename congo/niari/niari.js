// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niari","repository":"africa","path":"congo/niari","depth":2,"parent":"congo","children":["dolisie","mossendjo"]});
export const childModules = Object.freeze({"dolisie":"./dolisie/dolisie.js","mossendjo":"./mossendjo/mossendjo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
