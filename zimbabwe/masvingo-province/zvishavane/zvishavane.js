// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zvishavane","repository":"africa","path":"zimbabwe/masvingo-province/zvishavane","depth":3,"parent":"zimbabwe/masvingo-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
