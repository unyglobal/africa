// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grande-comore","repository":"africa","path":"comoros/grande-comore","depth":2,"parent":"comoros","children":["moroni"]});
export const childModules = Object.freeze({"moroni":"./moroni/moroni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
