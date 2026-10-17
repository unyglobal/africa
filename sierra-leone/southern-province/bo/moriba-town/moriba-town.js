// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moriba-town","repository":"africa","path":"sierra-leone/southern-province/bo/moriba-town","depth":4,"parent":"sierra-leone/southern-province/bo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
