// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-tor","repository":"africa","path":"egypt/south-sinai/el-tor","depth":3,"parent":"egypt/south-sinai","children":["tor-neighborhood"]});
export const childModules = Object.freeze({"tor-neighborhood":"./tor-neighborhood/tor-neighborhood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
