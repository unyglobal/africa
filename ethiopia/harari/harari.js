// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harari","repository":"africa","path":"ethiopia/harari","depth":2,"parent":"ethiopia","children":["harar"]});
export const childModules = Object.freeze({"harar":"./harar/harar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
