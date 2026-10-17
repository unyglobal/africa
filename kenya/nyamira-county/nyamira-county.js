// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyamira-county","repository":"africa","path":"kenya/nyamira-county","depth":2,"parent":"kenya","children":["nyamira"]});
export const childModules = Object.freeze({"nyamira":"./nyamira/nyamira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
