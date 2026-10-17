// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyandarua-county","repository":"africa","path":"kenya/nyandarua-county","depth":2,"parent":"kenya","children":["mairo-inya","ol-kalou","upper-gilgil"]});
export const childModules = Object.freeze({"mairo-inya":"./mairo-inya/mairo-inya.js","ol-kalou":"./ol-kalou/ol-kalou.js","upper-gilgil":"./upper-gilgil/upper-gilgil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
