// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fct","repository":"africa","path":"nigeria/fct","depth":2,"parent":"nigeria","children":["abuja","kuje"]});
export const childModules = Object.freeze({"abuja":"./abuja/abuja.js","kuje":"./kuje/kuje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
