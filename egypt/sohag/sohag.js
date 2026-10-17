// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sohag","repository":"africa","path":"egypt/sohag","depth":2,"parent":"egypt","children":["akhmim","al-balyana","al-maraghah","al-minshah","dar-as-salam","girga","juhaynah","saqultah","tahta","tima","tunis"]});
export const childModules = Object.freeze({"akhmim":"./akhmim/akhmim.js","al-balyana":"./al-balyana/al-balyana.js","al-maraghah":"./al-maraghah/al-maraghah.js","al-minshah":"./al-minshah/al-minshah.js","dar-as-salam":"./dar-as-salam/dar-as-salam.js","girga":"./girga/girga.js","juhaynah":"./juhaynah/juhaynah.js","saqultah":"./saqultah/saqultah.js","tahta":"./tahta/tahta.js","tima":"./tima/tima.js","tunis":"./tunis/tunis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
