// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khenchela","repository":"africa","path":"algeria/khenchela","depth":2,"parent":"algeria","children":["kais"]});
export const childModules = Object.freeze({"kais":"./kais/kais.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
