// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tozeur-governorate","repository":"africa","path":"tunisia/tozeur-governorate","depth":2,"parent":"tunisia","children":["nefta","tozeur"]});
export const childModules = Object.freeze({"nefta":"./nefta/nefta.js","tozeur":"./tozeur/tozeur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
