// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oti","repository":"africa","path":"ghana/oti","depth":2,"parent":"ghana","children":["dambai"]});
export const childModules = Object.freeze({"dambai":"./dambai/dambai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
