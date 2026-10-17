// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"murzuq-district","repository":"africa","path":"libya/murzuq-district","depth":2,"parent":"libya","children":["murzuk","wadi-utbah"]});
export const childModules = Object.freeze({"murzuk":"./murzuk/murzuk.js","wadi-utbah":"./wadi-utbah/wadi-utbah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
