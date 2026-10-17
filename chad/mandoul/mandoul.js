// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mandoul","repository":"africa","path":"chad/mandoul","depth":2,"parent":"chad","children":["bediondo","koumra","maro","moissala"]});
export const childModules = Object.freeze({"bediondo":"./bediondo/bediondo.js","koumra":"./koumra/koumra.js","maro":"./maro/maro.js","moissala":"./moissala/moissala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
