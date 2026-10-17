// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guidimaka","repository":"africa","path":"mauritania/guidimaka","depth":2,"parent":"mauritania","children":["selibaby"]});
export const childModules = Object.freeze({"selibaby":"./selibaby/selibaby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
