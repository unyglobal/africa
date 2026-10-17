// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ngouni","repository":"africa","path":"gabon/ngouni","depth":2,"parent":"gabon","children":["mouila"]});
export const childModules = Object.freeze({"mouila":"./mouila/mouila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
