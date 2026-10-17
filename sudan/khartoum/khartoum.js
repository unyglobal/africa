// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khartoum","repository":"africa","path":"sudan/khartoum","depth":2,"parent":"sudan","children":["khartoum-north","omdurman"]});
export const childModules = Object.freeze({"khartoum-north":"./khartoum-north/khartoum-north.js","omdurman":"./omdurman/omdurman.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
