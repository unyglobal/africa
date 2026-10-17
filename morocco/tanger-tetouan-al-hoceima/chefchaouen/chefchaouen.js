// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chefchaouen","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/chefchaouen","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["chefchaouen-kasbah"]});
export const childModules = Object.freeze({"chefchaouen-kasbah":"./chefchaouen-kasbah/chefchaouen-kasbah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
