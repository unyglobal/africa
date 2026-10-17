// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hay-sidi-mohamed-el-moujahid","repository":"africa","path":"morocco/fes-meknes/sabaa-aiyoun/hay-sidi-mohamed-el-moujahid","depth":4,"parent":"morocco/fes-meknes/sabaa-aiyoun","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
