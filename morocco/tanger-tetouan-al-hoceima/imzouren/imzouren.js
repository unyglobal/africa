// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imzouren","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/imzouren","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["hay-ettanaoui-i","hay-ettanaoui-ii"]});
export const childModules = Object.freeze({"hay-ettanaoui-i":"./hay-ettanaoui-i/hay-ettanaoui-i.js","hay-ettanaoui-ii":"./hay-ettanaoui-ii/hay-ettanaoui-ii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
