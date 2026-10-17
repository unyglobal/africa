// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-north","repository":"africa","path":"ghana/western-north","depth":2,"parent":"ghana","children":["bibiani"]});
export const childModules = Object.freeze({"bibiani":"./bibiani/bibiani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
