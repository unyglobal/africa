// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gokwe","repository":"africa","path":"zimbabwe/midlands-province/gokwe","depth":3,"parent":"zimbabwe/midlands-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
