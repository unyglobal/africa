// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taita-taveta","repository":"africa","path":"kenya/taita-taveta","depth":2,"parent":"kenya","children":["taveta","voi"]});
export const childModules = Object.freeze({"taveta":"./taveta/taveta.js","voi":"./voi/voi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
