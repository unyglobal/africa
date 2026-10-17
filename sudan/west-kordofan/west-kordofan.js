// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-kordofan","repository":"africa","path":"sudan/west-kordofan","depth":2,"parent":"sudan","children":["abu-zabad","abyei","al-mijlad","an-nuhud","babanusah","ghubaysh"]});
export const childModules = Object.freeze({"abu-zabad":"./abu-zabad/abu-zabad.js","abyei":"./abyei/abyei.js","al-mijlad":"./al-mijlad/al-mijlad.js","an-nuhud":"./an-nuhud/an-nuhud.js","babanusah":"./babanusah/babanusah.js","ghubaysh":"./ghubaysh/ghubaysh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
