// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ismailia","repository":"africa","path":"egypt/ismailia","depth":2,"parent":"egypt","children":["al-qantarah","fayid"]});
export const childModules = Object.freeze({"al-qantarah":"./al-qantarah/al-qantarah.js","fayid":"./fayid/fayid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
