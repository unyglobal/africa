// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savannah","repository":"africa","path":"ghana/savannah","depth":2,"parent":"ghana","children":["damongo","salaga"]});
export const childModules = Object.freeze({"damongo":"./damongo/damongo.js","salaga":"./salaga/salaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
