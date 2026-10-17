// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-darfur","repository":"africa","path":"sudan/western-darfur","depth":2,"parent":"sudan","children":["al-junaynah","ardamata","el-geneina-fort"]});
export const childModules = Object.freeze({"al-junaynah":"./al-junaynah/al-junaynah.js","ardamata":"./ardamata/ardamata.js","el-geneina-fort":"./el-geneina-fort/el-geneina-fort.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
