// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hay-mbassou","repository":"africa","path":"morocco/oriental/oujda/hay-mbassou","depth":4,"parent":"morocco/oriental/oujda","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
