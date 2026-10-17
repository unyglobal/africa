// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aswan","repository":"africa","path":"egypt/aswan","depth":2,"parent":"egypt","children":["al-basaliyah-bahri","as-siba-iyah","daraw","edfu","kom-ombo"]});
export const childModules = Object.freeze({"al-basaliyah-bahri":"./al-basaliyah-bahri/al-basaliyah-bahri.js","as-siba-iyah":"./as-siba-iyah/as-siba-iyah.js","daraw":"./daraw/daraw.js","edfu":"./edfu/edfu.js","kom-ombo":"./kom-ombo/kom-ombo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
