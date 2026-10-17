// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pemba-north","repository":"africa","path":"tanzania/pemba-north","depth":2,"parent":"tanzania","children":["wete"]});
export const childModules = Object.freeze({"wete":"./wete/wete.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
