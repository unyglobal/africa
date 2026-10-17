// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-alfred","repository":"africa","path":"south-africa/eastern-cape/port-alfred","depth":3,"parent":"south-africa/eastern-cape","children":["station-hill"]});
export const childModules = Object.freeze({"station-hill":"./station-hill/station-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
