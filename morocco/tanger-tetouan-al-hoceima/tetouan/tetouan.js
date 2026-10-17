// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tetouan","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/tetouan","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["bab-mqaber","bab-saida"]});
export const childModules = Object.freeze({"bab-mqaber":"./bab-mqaber/bab-mqaber.js","bab-saida":"./bab-saida/bab-saida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
