// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moxico","repository":"africa","path":"angola/moxico","depth":2,"parent":"angola","children":["luau","luena","lumbala"]});
export const childModules = Object.freeze({"luau":"./luau/luau.js","luena":"./luena/luena.js","lumbala":"./lumbala/lumbala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
