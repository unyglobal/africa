// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sud-ubangi","repository":"africa","path":"dr-congo/sud-ubangi","depth":2,"parent":"dr-congo","children":["gemena","libenge","zongo"]});
export const childModules = Object.freeze({"gemena":"./gemena/gemena.js","libenge":"./libenge/libenge.js","zongo":"./zongo/zongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
