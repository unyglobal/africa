// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trans-nzoia","repository":"africa","path":"kenya/trans-nzoia","depth":2,"parent":"kenya","children":["kiminini","kitale"]});
export const childModules = Object.freeze({"kiminini":"./kiminini/kiminini.js","kitale":"./kitale/kitale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
