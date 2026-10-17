// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-bahr-al-ghazal","repository":"africa","path":"south-sudan/western-bahr-al-ghazal","depth":2,"parent":"south-sudan","children":["kafia-kingi","wau"]});
export const childModules = Object.freeze({"kafia-kingi":"./kafia-kingi/kafia-kingi.js","wau":"./wau/wau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
