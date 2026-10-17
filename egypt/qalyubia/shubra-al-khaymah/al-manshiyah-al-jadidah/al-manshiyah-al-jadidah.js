// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-manshiyah-al-jadidah","repository":"africa","path":"egypt/qalyubia/shubra-al-khaymah/al-manshiyah-al-jadidah","depth":4,"parent":"egypt/qalyubia/shubra-al-khaymah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
