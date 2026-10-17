// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sahel","repository":"africa","path":"burkina-faso/sahel","depth":2,"parent":"burkina-faso","children":["aribinda","djibo","dori"]});
export const childModules = Object.freeze({"aribinda":"./aribinda/aribinda.js","djibo":"./djibo/djibo.js","dori":"./dori/dori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
