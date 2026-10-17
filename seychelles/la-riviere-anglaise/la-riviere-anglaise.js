// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-riviere-anglaise","repository":"africa","path":"seychelles/la-riviere-anglaise","depth":2,"parent":"seychelles","children":["victoria"]});
export const childModules = Object.freeze({"victoria":"./victoria/victoria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
