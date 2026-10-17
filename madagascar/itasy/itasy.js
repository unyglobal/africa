// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itasy","repository":"africa","path":"madagascar/itasy","depth":2,"parent":"madagascar","children":["arivonimamo","imerintsiatosika","soavinandriana"]});
export const childModules = Object.freeze({"arivonimamo":"./arivonimamo/arivonimamo.js","imerintsiatosika":"./imerintsiatosika/imerintsiatosika.js","soavinandriana":"./soavinandriana/soavinandriana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
