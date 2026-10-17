// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"logone-occidental","repository":"africa","path":"chad/logone-occidental","depth":2,"parent":"chad","children":["benoy","moundou"]});
export const childModules = Object.freeze({"benoy":"./benoy/benoy.js","moundou":"./moundou/moundou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
