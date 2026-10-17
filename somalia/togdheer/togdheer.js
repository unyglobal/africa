// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"togdheer","repository":"africa","path":"somalia/togdheer","depth":2,"parent":"somalia","children":["burao"]});
export const childModules = Object.freeze({"burao":"./burao/burao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
