// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laayoune-sakia-el-hamra","repository":"africa","path":"morocco/laayoune-sakia-el-hamra","depth":2,"parent":"morocco","children":["smara"]});
export const childModules = Object.freeze({"smara":"./smara/smara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
