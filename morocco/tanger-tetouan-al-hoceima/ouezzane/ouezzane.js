// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouezzane","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/ouezzane","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["quartier-bni-mrtne","quartier-dyour-jdud","quartier-erremel","quartier-gadir","quartier-gallid","quartier-jnane-ali"]});
export const childModules = Object.freeze({"quartier-bni-mrtne":"./quartier-bni-mrtne/quartier-bni-mrtne.js","quartier-dyour-jdud":"./quartier-dyour-jdud/quartier-dyour-jdud.js","quartier-erremel":"./quartier-erremel/quartier-erremel.js","quartier-gadir":"./quartier-gadir/quartier-gadir.js","quartier-gallid":"./quartier-gallid/quartier-gallid.js","quartier-jnane-ali":"./quartier-jnane-ali/quartier-jnane-ali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
