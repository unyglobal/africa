// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"smara","repository":"africa","path":"morocco/laayoune-sakia-el-hamra/smara","depth":3,"parent":"morocco/laayoune-sakia-el-hamra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
