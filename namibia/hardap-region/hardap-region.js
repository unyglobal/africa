// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hardap-region","repository":"africa","path":"namibia/hardap-region","depth":2,"parent":"namibia","children":["rehoboth"]});
export const childModules = Object.freeze({"rehoboth":"./rehoboth/rehoboth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
