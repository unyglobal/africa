// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirinyaga-county","repository":"africa","path":"kenya/kirinyaga-county","depth":2,"parent":"kenya","children":["kerugoya","wanguru"]});
export const childModules = Object.freeze({"kerugoya":"./kerugoya/kerugoya.js","wanguru":"./wanguru/wanguru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
