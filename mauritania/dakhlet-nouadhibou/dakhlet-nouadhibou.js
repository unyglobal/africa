// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dakhlet-nouadhibou","repository":"africa","path":"mauritania/dakhlet-nouadhibou","depth":2,"parent":"mauritania","children":["nouadhibou"]});
export const childModules = Object.freeze({"nouadhibou":"./nouadhibou/nouadhibou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
