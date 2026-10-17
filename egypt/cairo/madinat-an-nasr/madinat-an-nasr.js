// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madinat-an-nasr","repository":"africa","path":"egypt/cairo/madinat-an-nasr","depth":3,"parent":"egypt/cairo","children":["imarat-imtidad-ramsis"]});
export const childModules = Object.freeze({"imarat-imtidad-ramsis":"./imarat-imtidad-ramsis/imarat-imtidad-ramsis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
