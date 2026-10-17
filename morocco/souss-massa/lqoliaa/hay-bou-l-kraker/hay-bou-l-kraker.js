// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hay-bou-l-kraker","repository":"africa","path":"morocco/souss-massa/lqoliaa/hay-bou-l-kraker","depth":4,"parent":"morocco/souss-massa/lqoliaa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
