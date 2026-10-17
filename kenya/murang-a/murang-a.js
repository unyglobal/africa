// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"murang-a","repository":"africa","path":"kenya/murang-a","depth":2,"parent":"kenya","children":["kenol"]});
export const childModules = Object.freeze({"kenol":"./kenol/kenol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
