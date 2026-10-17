// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nana-mambere","repository":"africa","path":"central-african-republic/nana-mambere","depth":2,"parent":"central-african-republic","children":["abba","baboua","baoro","bouar"]});
export const childModules = Object.freeze({"abba":"./abba/abba.js","baboua":"./baboua/baboua.js","baoro":"./baoro/baoro.js","bouar":"./bouar/bouar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
