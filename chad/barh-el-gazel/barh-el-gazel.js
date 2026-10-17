// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barh-el-gazel","repository":"africa","path":"chad/barh-el-gazel","depth":2,"parent":"chad","children":["moussoro"]});
export const childModules = Object.freeze({"moussoro":"./moussoro/moussoro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
