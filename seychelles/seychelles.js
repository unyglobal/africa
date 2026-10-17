// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seychelles","repository":"africa","path":"seychelles","depth":1,"parent":"","children":["la-riviere-anglaise"]});
export const childModules = Object.freeze({"la-riviere-anglaise":"./la-riviere-anglaise/la-riviere-anglaise.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
