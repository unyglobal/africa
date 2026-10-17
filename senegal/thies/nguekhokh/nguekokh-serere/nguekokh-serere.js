// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nguekokh-serere","repository":"africa","path":"senegal/thies/nguekhokh/nguekokh-serere","depth":4,"parent":"senegal/thies/nguekhokh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
