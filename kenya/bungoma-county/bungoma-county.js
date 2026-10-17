// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bungoma-county","repository":"africa","path":"kenya/bungoma-county","depth":2,"parent":"kenya","children":["bungoma","kimilili","webuye"]});
export const childModules = Object.freeze({"bungoma":"./bungoma/bungoma.js","kimilili":"./kimilili/kimilili.js","webuye":"./webuye/webuye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
