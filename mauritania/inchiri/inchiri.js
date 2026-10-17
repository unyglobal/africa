// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inchiri","repository":"africa","path":"mauritania/inchiri","depth":2,"parent":"mauritania","children":["akjoujt"]});
export const childModules = Object.freeze({"akjoujt":"./akjoujt/akjoujt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
