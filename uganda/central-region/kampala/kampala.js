// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kampala","repository":"africa","path":"uganda/central-region/kampala","depth":3,"parent":"uganda/central-region","children":["nakasero"]});
export const childModules = Object.freeze({"nakasero":"./nakasero/nakasero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
