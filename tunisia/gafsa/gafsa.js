// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gafsa","repository":"africa","path":"tunisia/gafsa","depth":2,"parent":"tunisia","children":["ar-rudayyif","el-ksar","metlaoui","moulares"]});
export const childModules = Object.freeze({"ar-rudayyif":"./ar-rudayyif/ar-rudayyif.js","el-ksar":"./el-ksar/el-ksar.js","metlaoui":"./metlaoui/metlaoui.js","moulares":"./moulares/moulares.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
