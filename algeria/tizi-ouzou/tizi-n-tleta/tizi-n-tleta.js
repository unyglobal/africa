// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tizi-n-tleta","repository":"africa","path":"algeria/tizi-ouzou/tizi-n-tleta","depth":3,"parent":"algeria/tizi-ouzou","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
