// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tunis","repository":"africa","path":"tunisia/tunis-governorate/tunis","depth":3,"parent":"tunisia/tunis-governorate","children":["jbal-lahmar"]});
export const childModules = Object.freeze({"jbal-lahmar":"./jbal-lahmar/jbal-lahmar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
