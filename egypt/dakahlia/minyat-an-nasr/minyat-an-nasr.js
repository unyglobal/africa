// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minyat-an-nasr","repository":"africa","path":"egypt/dakahlia/minyat-an-nasr","depth":3,"parent":"egypt/dakahlia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
