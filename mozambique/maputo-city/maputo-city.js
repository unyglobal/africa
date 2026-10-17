// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maputo-city","repository":"africa","path":"mozambique/maputo-city","depth":2,"parent":"mozambique","children":["maputo"]});
export const childModules = Object.freeze({"maputo":"./maputo/maputo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
