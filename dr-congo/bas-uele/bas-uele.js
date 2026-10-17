// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bas-uele","repository":"africa","path":"dr-congo/bas-uele","depth":2,"parent":"dr-congo","children":["aketi","bondo","buta"]});
export const childModules = Object.freeze({"aketi":"./aketi/aketi.js","bondo":"./bondo/bondo.js","buta":"./buta/buta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
