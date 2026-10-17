// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-west","repository":"africa","path":"sierra-leone/north-west","depth":2,"parent":"sierra-leone","children":["port-loko"]});
export const childModules = Object.freeze({"port-loko":"./port-loko/port-loko.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
