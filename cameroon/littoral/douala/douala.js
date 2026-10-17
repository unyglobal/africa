// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"douala","repository":"africa","path":"cameroon/littoral/douala","depth":3,"parent":"cameroon/littoral","children":["akwa"]});
export const childModules = Object.freeze({"akwa":"./akwa/akwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
