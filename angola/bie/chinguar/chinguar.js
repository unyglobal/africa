// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chinguar","repository":"africa","path":"angola/bie/chinguar","depth":3,"parent":"angola/bie","children":["gremio"]});
export const childModules = Object.freeze({"gremio":"./gremio/gremio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
