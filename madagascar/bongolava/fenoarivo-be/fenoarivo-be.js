// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fenoarivo-be","repository":"africa","path":"madagascar/bongolava/fenoarivo-be","depth":3,"parent":"madagascar/bongolava","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
