// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taqsim-ar-raqabah-al-idariyah","repository":"africa","path":"egypt/cairo/hada-iq-al-qubbah/taqsim-ar-raqabah-al-idariyah","depth":4,"parent":"egypt/cairo/hada-iq-al-qubbah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
