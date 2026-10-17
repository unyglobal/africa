// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bomi-county","repository":"africa","path":"liberia/bomi-county","depth":2,"parent":"liberia","children":["tubmanburg"]});
export const childModules = Object.freeze({"tubmanburg":"./tubmanburg/tubmanburg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
