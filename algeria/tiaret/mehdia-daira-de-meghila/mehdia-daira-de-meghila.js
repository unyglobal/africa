// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mehdia-daira-de-meghila","repository":"africa","path":"algeria/tiaret/mehdia-daira-de-meghila","depth":3,"parent":"algeria/tiaret","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
