// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tadjourah","repository":"africa","path":"djibouti/tadjourah","depth":2,"parent":"djibouti","children":["tadjoura"]});
export const childModules = Object.freeze({"tadjoura":"./tadjoura/tadjoura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
