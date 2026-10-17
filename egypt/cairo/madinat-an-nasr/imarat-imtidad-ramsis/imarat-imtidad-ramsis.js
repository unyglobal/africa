// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imarat-imtidad-ramsis","repository":"africa","path":"egypt/cairo/madinat-an-nasr/imarat-imtidad-ramsis","depth":4,"parent":"egypt/cairo/madinat-an-nasr","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
