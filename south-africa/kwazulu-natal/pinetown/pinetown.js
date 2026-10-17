// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pinetown","repository":"africa","path":"south-africa/kwazulu-natal/pinetown","depth":3,"parent":"south-africa/kwazulu-natal","children":["cowies-hill"]});
export const childModules = Object.freeze({"cowies-hill":"./cowies-hill/cowies-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
