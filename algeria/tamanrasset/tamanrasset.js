// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamanrasset","repository":"africa","path":"algeria/tamanrasset","depth":2,"parent":"algeria","children":["tamanghasset"]});
export const childModules = Object.freeze({"tamanghasset":"./tamanghasset/tamanghasset.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
