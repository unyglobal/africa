// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-province","repository":"africa","path":"sierra-leone/southern-province","depth":2,"parent":"sierra-leone","children":["bo","bumpe","njala"]});
export const childModules = Object.freeze({"bo":"./bo/bo.js","bumpe":"./bumpe/bumpe.js","njala":"./njala/njala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
