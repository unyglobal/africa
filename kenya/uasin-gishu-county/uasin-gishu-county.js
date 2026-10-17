// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uasin-gishu-county","repository":"africa","path":"kenya/uasin-gishu-county","depth":2,"parent":"kenya","children":["eldoret","moi-s-bridge"]});
export const childModules = Object.freeze({"eldoret":"./eldoret/eldoret.js","moi-s-bridge":"./moi-s-bridge/moi-s-bridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
