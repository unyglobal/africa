// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bo","repository":"africa","path":"sierra-leone/southern-province/bo","depth":3,"parent":"sierra-leone/southern-province","children":["moriba-town"]});
export const childModules = Object.freeze({"moriba-town":"./moriba-town/moriba-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
