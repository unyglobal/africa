// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asilah","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/asilah","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["bachaouiya","hay-dorra","hay-ghdir-lagnaoui","hay-lalla-rahma","hay-sidi-oualou","houmet-lhamra","medina"]});
export const childModules = Object.freeze({"bachaouiya":"./bachaouiya/bachaouiya.js","hay-dorra":"./hay-dorra/hay-dorra.js","hay-ghdir-lagnaoui":"./hay-ghdir-lagnaoui/hay-ghdir-lagnaoui.js","hay-lalla-rahma":"./hay-lalla-rahma/hay-lalla-rahma.js","hay-sidi-oualou":"./hay-sidi-oualou/hay-sidi-oualou.js","houmet-lhamra":"./houmet-lhamra/houmet-lhamra.js","medina":"./medina/medina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
