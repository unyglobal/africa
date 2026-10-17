// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cankuzo","repository":"africa","path":"burundi/cankuzo","depth":2,"parent":"burundi","children":["cendajuru"]});
export const childModules = Object.freeze({"cendajuru":"./cendajuru/cendajuru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
