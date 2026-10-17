// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-bank","repository":"africa","path":"gambia/north-bank","depth":2,"parent":"gambia","children":["farafenni","lamin"]});
export const childModules = Object.freeze({"farafenni":"./farafenni/farafenni.js","lamin":"./lamin/lamin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
