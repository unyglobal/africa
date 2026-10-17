// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tharaka-nithi","repository":"africa","path":"kenya/tharaka-nithi","depth":2,"parent":"kenya","children":["chuka"]});
export const childModules = Object.freeze({"chuka":"./chuka/chuka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
