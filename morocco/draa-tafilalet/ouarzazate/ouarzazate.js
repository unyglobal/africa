// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouarzazate","repository":"africa","path":"morocco/draa-tafilalet/ouarzazate","depth":3,"parent":"morocco/draa-tafilalet","children":["sidi-dawd","tawrirt"]});
export const childModules = Object.freeze({"sidi-dawd":"./sidi-dawd/sidi-dawd.js","tawrirt":"./tawrirt/tawrirt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
