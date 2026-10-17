// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benghazi","repository":"africa","path":"libya/banghazi/benghazi","depth":3,"parent":"libya/banghazi","children":["ad-durawi","al-madinah-al-qadimah","al-wuhayshi","ash-sharif","bin-isa","ghuraybil","sidi-husayn"]});
export const childModules = Object.freeze({"ad-durawi":"./ad-durawi/ad-durawi.js","al-madinah-al-qadimah":"./al-madinah-al-qadimah/al-madinah-al-qadimah.js","al-wuhayshi":"./al-wuhayshi/al-wuhayshi.js","ash-sharif":"./ash-sharif/ash-sharif.js","bin-isa":"./bin-isa/bin-isa.js","ghuraybil":"./ghuraybil/ghuraybil.js","sidi-husayn":"./sidi-husayn/sidi-husayn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
