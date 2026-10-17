// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabha-district","repository":"africa","path":"libya/sabha-district","depth":2,"parent":"libya","children":["al-jadid","sabha"]});
export const childModules = Object.freeze({"al-jadid":"./al-jadid/al-jadid.js","sabha":"./sabha/sabha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
