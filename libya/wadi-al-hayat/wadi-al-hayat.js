// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wadi-al-hayat","repository":"africa","path":"libya/wadi-al-hayat","depth":2,"parent":"libya","children":["al-ghurayfah","ubari"]});
export const childModules = Object.freeze({"al-ghurayfah":"./al-ghurayfah/al-ghurayfah.js","ubari":"./ubari/ubari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
