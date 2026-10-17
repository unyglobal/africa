// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kasba-tadla","repository":"africa","path":"morocco/beni-mellal-khenifra/kasba-tadla","depth":3,"parent":"morocco/beni-mellal-khenifra","children":["sidi-mohamed-el-bouhali"]});
export const childModules = Object.freeze({"sidi-mohamed-el-bouhali":"./sidi-mohamed-el-bouhali/sidi-mohamed-el-bouhali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
