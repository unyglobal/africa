// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tangier","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/tangier","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["charf","drissiya","moulay-smail"]});
export const childModules = Object.freeze({"charf":"./charf/charf.js","drissiya":"./drissiya/drissiya.js","moulay-smail":"./moulay-smail/moulay-smail.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
