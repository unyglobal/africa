// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-bahr-al-ghazal","repository":"africa","path":"south-sudan/northern-bahr-al-ghazal","depth":2,"parent":"south-sudan","children":["aweil","winejok"]});
export const childModules = Object.freeze({"aweil":"./aweil/aweil.js","winejok":"./winejok/winejok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
