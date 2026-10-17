// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taza","repository":"africa","path":"morocco/fes-meknes/taza","depth":3,"parent":"morocco/fes-meknes","children":["medina"]});
export const childModules = Object.freeze({"medina":"./medina/medina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
