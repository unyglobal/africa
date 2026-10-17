// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cubango","repository":"africa","path":"angola/cubango","depth":2,"parent":"angola","children":["menongue"]});
export const childModules = Object.freeze({"menongue":"./menongue/menongue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
