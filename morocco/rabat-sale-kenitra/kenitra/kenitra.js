// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kenitra","repository":"africa","path":"morocco/rabat-sale-kenitra/kenitra","depth":3,"parent":"morocco/rabat-sale-kenitra","children":["lmellah","medina"]});
export const childModules = Object.freeze({"lmellah":"./lmellah/lmellah.js","medina":"./medina/medina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
