// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouled-djellal","repository":"africa","path":"algeria/ouled-djellal","depth":2,"parent":"algeria","children":["sidi-khaled"]});
export const childModules = Object.freeze({"sidi-khaled":"./sidi-khaled/sidi-khaled.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
