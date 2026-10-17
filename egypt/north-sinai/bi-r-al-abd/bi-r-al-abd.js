// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bi-r-al-abd","repository":"africa","path":"egypt/north-sinai/bi-r-al-abd","depth":3,"parent":"egypt/north-sinai","children":["hayy-al-aqayilah","hayy-al-musabahah","hayy-as-sarrahin","hayy-at-tawinah"]});
export const childModules = Object.freeze({"hayy-al-aqayilah":"./hayy-al-aqayilah/hayy-al-aqayilah.js","hayy-al-musabahah":"./hayy-al-musabahah/hayy-al-musabahah.js","hayy-as-sarrahin":"./hayy-as-sarrahin/hayy-as-sarrahin.js","hayy-at-tawinah":"./hayy-at-tawinah/hayy-at-tawinah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
