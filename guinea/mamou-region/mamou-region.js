// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mamou-region","repository":"africa","path":"guinea/mamou-region","depth":2,"parent":"guinea","children":["mamou","pita"]});
export const childModules = Object.freeze({"mamou":"./mamou/mamou.js","pita":"./pita/pita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
