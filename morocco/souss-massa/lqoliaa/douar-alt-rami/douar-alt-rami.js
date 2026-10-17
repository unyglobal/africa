// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"douar-alt-rami","repository":"africa","path":"morocco/souss-massa/lqoliaa/douar-alt-rami","depth":4,"parent":"morocco/souss-massa/lqoliaa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
