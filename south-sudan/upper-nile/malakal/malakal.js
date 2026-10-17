// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malakal","repository":"africa","path":"south-sudan/upper-nile/malakal","depth":3,"parent":"south-sudan/upper-nile","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
