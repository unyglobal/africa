// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"swedru","repository":"africa","path":"ghana/central/swedru","depth":3,"parent":"ghana/central","children":["jwewuhu"]});
export const childModules = Object.freeze({"jwewuhu":"./jwewuhu/jwewuhu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
