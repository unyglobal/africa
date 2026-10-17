// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kassala","repository":"africa","path":"sudan/kassala","depth":2,"parent":"sudan","children":["new-halfa"]});
export const childModules = Object.freeze({"new-halfa":"./new-halfa/new-halfa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
