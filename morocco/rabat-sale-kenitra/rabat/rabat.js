// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rabat","repository":"africa","path":"morocco/rabat-sale-kenitra/rabat","depth":3,"parent":"morocco/rabat-sale-kenitra","children":["les-ministeres","touarga","tour-hassan"]});
export const childModules = Object.freeze({"les-ministeres":"./les-ministeres/les-ministeres.js","touarga":"./touarga/touarga.js","tour-hassan":"./tour-hassan/tour-hassan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
