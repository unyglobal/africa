// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tana-river-county","repository":"africa","path":"kenya/tana-river-county","depth":2,"parent":"kenya","children":["hola","masalani"]});
export const childModules = Object.freeze({"hola":"./hola/hola.js","masalani":"./masalani/masalani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
