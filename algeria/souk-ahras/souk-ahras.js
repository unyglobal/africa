// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"souk-ahras","repository":"africa","path":"algeria/souk-ahras","depth":2,"parent":"algeria","children":["m-daourouch","sedrata"]});
export const childModules = Object.freeze({"m-daourouch":"./m-daourouch/m-daourouch.js","sedrata":"./sedrata/sedrata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
