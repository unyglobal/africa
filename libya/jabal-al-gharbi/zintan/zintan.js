// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zintan","repository":"africa","path":"libya/jabal-al-gharbi/zintan","depth":3,"parent":"libya/jabal-al-gharbi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
