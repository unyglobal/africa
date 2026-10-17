// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gitega","repository":"africa","path":"burundi/gitega","depth":2,"parent":"burundi","children":["karusi","zanandore"]});
export const childModules = Object.freeze({"karusi":"./karusi/karusi.js","zanandore":"./zanandore/zanandore.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
