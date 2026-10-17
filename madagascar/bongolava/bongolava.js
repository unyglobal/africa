// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bongolava","repository":"africa","path":"madagascar/bongolava","depth":2,"parent":"madagascar","children":["fenoarivo-be","tsiroanomandidy"]});
export const childModules = Object.freeze({"fenoarivo-be":"./fenoarivo-be/fenoarivo-be.js","tsiroanomandidy":"./tsiroanomandidy/tsiroanomandidy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
