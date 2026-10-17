// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyanga","repository":"africa","path":"gabon/nyanga","depth":2,"parent":"gabon","children":["tchibanga"]});
export const childModules = Object.freeze({"tchibanga":"./tchibanga/tchibanga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
