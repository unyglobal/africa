// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zanzibar-urban-west","repository":"africa","path":"tanzania/zanzibar-urban-west","depth":2,"parent":"tanzania","children":["zanzibar"]});
export const childModules = Object.freeze({"zanzibar":"./zanzibar/zanzibar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
