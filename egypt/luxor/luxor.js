// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luxor","repository":"africa","path":"egypt/luxor","depth":2,"parent":"egypt","children":["al-bayadiyah","az-zayniyah-qibli","tud"]});
export const childModules = Object.freeze({"al-bayadiyah":"./al-bayadiyah/al-bayadiyah.js","az-zayniyah-qibli":"./az-zayniyah-qibli/az-zayniyah-qibli.js","tud":"./tud/tud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
