// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-red-sea","repository":"africa","path":"eritrea/southern-red-sea","depth":2,"parent":"eritrea","children":["assab"]});
export const childModules = Object.freeze({"assab":"./assab/assab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
