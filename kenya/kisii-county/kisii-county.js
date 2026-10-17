// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kisii-county","repository":"africa","path":"kenya/kisii-county","depth":2,"parent":"kenya","children":["kisii","ogembo"]});
export const childModules = Object.freeze({"kisii":"./kisii/kisii.js","ogembo":"./ogembo/ogembo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
