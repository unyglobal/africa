// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"le-plateau","repository":"africa","path":"senegal/dakar/le-plateau","depth":3,"parent":"senegal/dakar","children":["dial-diop"]});
export const childModules = Object.freeze({"dial-diop":"./dial-diop/dial-diop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
