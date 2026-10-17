// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faiyum","repository":"africa","path":"egypt/faiyum","depth":2,"parent":"egypt","children":["al-fayyum","al-wasitah","ibshaway","itsa","sinnuris","tamiyah","yusuf-as-siddiq"]});
export const childModules = Object.freeze({"al-fayyum":"./al-fayyum/al-fayyum.js","al-wasitah":"./al-wasitah/al-wasitah.js","ibshaway":"./ibshaway/ibshaway.js","itsa":"./itsa/itsa.js","sinnuris":"./sinnuris/sinnuris.js","tamiyah":"./tamiyah/tamiyah.js","yusuf-as-siddiq":"./yusuf-as-siddiq/yusuf-as-siddiq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
