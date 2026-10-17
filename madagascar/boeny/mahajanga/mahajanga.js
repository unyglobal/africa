// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahajanga","repository":"africa","path":"madagascar/boeny/mahajanga","depth":3,"parent":"madagascar/boeny","children":["abattoir"]});
export const childModules = Object.freeze({"abattoir":"./abattoir/abattoir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
