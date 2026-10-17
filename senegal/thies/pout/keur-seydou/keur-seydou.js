// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keur-seydou","repository":"africa","path":"senegal/thies/pout/keur-seydou","depth":4,"parent":"senegal/thies/pout","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
