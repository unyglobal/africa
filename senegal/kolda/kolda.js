// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kolda","repository":"africa","path":"senegal/kolda","depth":2,"parent":"senegal","children":["diaoube","medina-gounas","velingara"]});
export const childModules = Object.freeze({"diaoube":"./diaoube/diaoube.js","medina-gounas":"./medina-gounas/medina-gounas.js","velingara":"./velingara/velingara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
