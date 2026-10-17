// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diepsloot","repository":"africa","path":"south-africa/gauteng/diepsloot","depth":3,"parent":"south-africa/gauteng","children":["diepsloot-west-6"]});
export const childModules = Object.freeze({"diepsloot-west-6":"./diepsloot-west-6/diepsloot-west-6.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
