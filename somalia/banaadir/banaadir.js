// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banaadir","repository":"africa","path":"somalia/banaadir","depth":2,"parent":"somalia","children":["mogadishu"]});
export const childModules = Object.freeze({"mogadishu":"./mogadishu/mogadishu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
