// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-kufrah","repository":"africa","path":"libya/al-kufrah","depth":2,"parent":"libya","children":["al-jawf","at-taj"]});
export const childModules = Object.freeze({"al-jawf":"./al-jawf/al-jawf.js","at-taj":"./at-taj/at-taj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
