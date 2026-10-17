// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bin-jawwad","repository":"africa","path":"libya/surt/bin-jawwad","depth":3,"parent":"libya/surt","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
