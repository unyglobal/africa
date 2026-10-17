// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shubra-al-khaymah","repository":"africa","path":"egypt/qalyubia/shubra-al-khaymah","depth":3,"parent":"egypt/qalyubia","children":["al-manshiyah-al-jadidah","izbat-uthman","madinat-as-sa-adah"]});
export const childModules = Object.freeze({"al-manshiyah-al-jadidah":"./al-manshiyah-al-jadidah/al-manshiyah-al-jadidah.js","izbat-uthman":"./izbat-uthman/izbat-uthman.js","madinat-as-sa-adah":"./madinat-as-sa-adah/madinat-as-sa-adah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
