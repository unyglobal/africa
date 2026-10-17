// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"charf","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/tangier/charf","depth":4,"parent":"morocco/tanger-tetouan-al-hoceima/tangier","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
