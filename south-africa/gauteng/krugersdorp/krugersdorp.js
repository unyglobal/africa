// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krugersdorp","repository":"africa","path":"south-africa/gauteng/krugersdorp","depth":3,"parent":"south-africa/gauteng","children":["rant-en-dal"]});
export const childModules = Object.freeze({"rant-en-dal":"./rant-en-dal/rant-en-dal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
