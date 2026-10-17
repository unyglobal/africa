// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tresorene","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/ksar-el-kebir/tresorene","depth":4,"parent":"morocco/tanger-tetouan-al-hoceima/ksar-el-kebir","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
