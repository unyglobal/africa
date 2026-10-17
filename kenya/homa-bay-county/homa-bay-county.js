// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"homa-bay-county","repository":"africa","path":"kenya/homa-bay-county","depth":2,"parent":"kenya","children":["homa-bay","oyugis"]});
export const childModules = Object.freeze({"homa-bay":"./homa-bay/homa-bay.js","oyugis":"./oyugis/oyugis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
