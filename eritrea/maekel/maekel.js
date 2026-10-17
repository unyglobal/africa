// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maekel","repository":"africa","path":"eritrea/maekel","depth":2,"parent":"eritrea","children":["asmara"]});
export const childModules = Object.freeze({"asmara":"./asmara/asmara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
