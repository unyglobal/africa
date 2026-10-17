// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tiris-zemmour","repository":"africa","path":"mauritania/tiris-zemmour","depth":2,"parent":"mauritania","children":["zouerat"]});
export const childModules = Object.freeze({"zouerat":"./zouerat/zouerat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
