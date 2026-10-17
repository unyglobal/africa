// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hay-el-mosjid","repository":"africa","path":"morocco/marrakesh-safi/sebt-gzoula/hay-el-mosjid","depth":4,"parent":"morocco/marrakesh-safi/sebt-gzoula","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
