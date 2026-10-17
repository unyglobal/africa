// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sool","repository":"africa","path":"somalia/sool","depth":2,"parent":"somalia","children":["laascaanood"]});
export const childModules = Object.freeze({"laascaanood":"./laascaanood/laascaanood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
