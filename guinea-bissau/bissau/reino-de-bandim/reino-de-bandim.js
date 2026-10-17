// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reino-de-bandim","repository":"africa","path":"guinea-bissau/bissau/reino-de-bandim","depth":3,"parent":"guinea-bissau/bissau","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
