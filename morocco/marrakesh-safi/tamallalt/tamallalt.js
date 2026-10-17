// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamallalt","repository":"africa","path":"morocco/marrakesh-safi/tamallalt","depth":3,"parent":"morocco/marrakesh-safi","children":["hay-el-alim"]});
export const childModules = Object.freeze({"hay-el-alim":"./hay-el-alim/hay-el-alim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
