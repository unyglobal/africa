// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anseba","repository":"africa","path":"eritrea/anseba","depth":2,"parent":"eritrea","children":["keren"]});
export const childModules = Object.freeze({"keren":"./keren/keren.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
