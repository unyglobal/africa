// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haute-kotto","repository":"africa","path":"central-african-republic/haute-kotto","depth":2,"parent":"central-african-republic","children":["bria"]});
export const childModules = Object.freeze({"bria":"./bria/bria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
