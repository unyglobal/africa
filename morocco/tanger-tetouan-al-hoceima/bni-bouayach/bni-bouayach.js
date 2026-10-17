// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bni-bouayach","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/bni-bouayach","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["hay-el-iskardariya","hay-hammou-ezzayani"]});
export const childModules = Object.freeze({"hay-el-iskardariya":"./hay-el-iskardariya/hay-el-iskardariya.js","hay-hammou-ezzayani":"./hay-hammou-ezzayani/hay-hammou-ezzayani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
