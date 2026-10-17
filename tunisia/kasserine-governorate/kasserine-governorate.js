// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kasserine-governorate","repository":"africa","path":"tunisia/kasserine-governorate","depth":2,"parent":"tunisia","children":["feriana","kasserine","sbeitla","thala"]});
export const childModules = Object.freeze({"feriana":"./feriana/feriana.js","kasserine":"./kasserine/kasserine.js","sbeitla":"./sbeitla/sbeitla.js","thala":"./thala/thala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
