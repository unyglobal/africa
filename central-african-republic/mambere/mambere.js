// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mambere","repository":"africa","path":"central-african-republic/mambere","depth":2,"parent":"central-african-republic","children":["carnot"]});
export const childModules = Object.freeze({"carnot":"./carnot/carnot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
