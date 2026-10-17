// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borkou","repository":"africa","path":"chad/borkou","depth":2,"parent":"chad","children":["faya-largeau"]});
export const childModules = Object.freeze({"faya-largeau":"./faya-largeau/faya-largeau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
