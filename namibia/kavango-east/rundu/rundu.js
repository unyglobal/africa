// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rundu","repository":"africa","path":"namibia/kavango-east/rundu","depth":3,"parent":"namibia/kavango-east","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
