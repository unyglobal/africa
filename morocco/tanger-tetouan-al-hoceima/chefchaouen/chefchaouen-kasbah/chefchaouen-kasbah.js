// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chefchaouen-kasbah","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/chefchaouen/chefchaouen-kasbah","depth":4,"parent":"morocco/tanger-tetouan-al-hoceima/chefchaouen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
