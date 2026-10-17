// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hada-iq-al-qubbah","repository":"africa","path":"egypt/cairo/hada-iq-al-qubbah","depth":3,"parent":"egypt/cairo","children":["al-wayli-al-kabir","masakin-al-qubbah-al-jadidah","taqsim-ar-raqabah-al-idariyah"]});
export const childModules = Object.freeze({"al-wayli-al-kabir":"./al-wayli-al-kabir/al-wayli-al-kabir.js","masakin-al-qubbah-al-jadidah":"./masakin-al-qubbah-al-jadidah/masakin-al-qubbah-al-jadidah.js","taqsim-ar-raqabah-al-idariyah":"./taqsim-ar-raqabah-al-idariyah/taqsim-ar-raqabah-al-idariyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
