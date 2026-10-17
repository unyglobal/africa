// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"derb-tine-biougra","repository":"africa","path":"morocco/souss-massa/tine-biougra/derb-tine-biougra","depth":4,"parent":"morocco/souss-massa/tine-biougra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
