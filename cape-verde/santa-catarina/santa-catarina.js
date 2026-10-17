// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-catarina","repository":"africa","path":"cape-verde/santa-catarina","depth":2,"parent":"cape-verde","children":["assomada"]});
export const childModules = Object.freeze({"assomada":"./assomada/assomada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
