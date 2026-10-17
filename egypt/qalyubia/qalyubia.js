// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qalyubia","repository":"africa","path":"egypt/qalyubia","depth":2,"parent":"egypt","children":["al-khankah","al-khusus","al-qanatir-al-khayriyah","al-ubur","banha","qaha","qalyub","shibin-al-qanatir","shubra-al-khaymah","tukh"]});
export const childModules = Object.freeze({"al-khankah":"./al-khankah/al-khankah.js","al-khusus":"./al-khusus/al-khusus.js","al-qanatir-al-khayriyah":"./al-qanatir-al-khayriyah/al-qanatir-al-khayriyah.js","al-ubur":"./al-ubur/al-ubur.js","banha":"./banha/banha.js","qaha":"./qaha/qaha.js","qalyub":"./qalyub/qalyub.js","shibin-al-qanatir":"./shibin-al-qanatir/shibin-al-qanatir.js","shubra-al-khaymah":"./shubra-al-khaymah/shubra-al-khaymah.js","tukh":"./tukh/tukh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
