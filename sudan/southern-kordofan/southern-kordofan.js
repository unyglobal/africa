// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-kordofan","repository":"africa","path":"sudan/southern-kordofan","depth":2,"parent":"sudan","children":["abu-jibeha","al-fulah","dilling","kadugli"]});
export const childModules = Object.freeze({"abu-jibeha":"./abu-jibeha/abu-jibeha.js","al-fulah":"./al-fulah/al-fulah.js","dilling":"./dilling/dilling.js","kadugli":"./kadugli/kadugli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
