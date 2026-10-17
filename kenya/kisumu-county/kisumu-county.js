// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kisumu-county","repository":"africa","path":"kenya/kisumu-county","depth":2,"parent":"kenya","children":["kisumu","muhoroni"]});
export const childModules = Object.freeze({"kisumu":"./kisumu/kisumu.js","muhoroni":"./muhoroni/muhoroni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
