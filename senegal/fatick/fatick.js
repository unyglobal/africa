// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fatick","repository":"africa","path":"senegal/fatick","depth":2,"parent":"senegal","children":["gossas-village","poukham-un"]});
export const childModules = Object.freeze({"gossas-village":"./gossas-village/gossas-village.js","poukham-un":"./poukham-un/poukham-un.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
