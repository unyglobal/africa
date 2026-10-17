// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esim","repository":"africa","path":"ghana/western/esim","depth":3,"parent":"ghana/western","children":["lower-town","upper-town"]});
export const childModules = Object.freeze({"lower-town":"./lower-town/lower-town.js","upper-town":"./upper-town/upper-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
