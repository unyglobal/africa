// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-aioun","repository":"africa","path":"morocco/oriental/el-aioun","depth":3,"parent":"morocco/oriental","children":["hay-el-mahummadi"]});
export const childModules = Object.freeze({"hay-el-mahummadi":"./hay-el-mahummadi/hay-el-mahummadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
