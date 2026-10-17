// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uige","repository":"africa","path":"angola/uige","depth":2,"parent":"angola","children":["maquela-do-zombo","negage","sanza-pombo","songo"]});
export const childModules = Object.freeze({"maquela-do-zombo":"./maquela-do-zombo/maquela-do-zombo.js","negage":"./negage/negage.js","sanza-pombo":"./sanza-pombo/sanza-pombo.js","songo":"./songo/songo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
