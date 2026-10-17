// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"red-sea","repository":"africa","path":"sudan/red-sea","depth":2,"parent":"sudan","children":["jubayt","port-sudan","sinkat","suakin","tokar"]});
export const childModules = Object.freeze({"jubayt":"./jubayt/jubayt.js","port-sudan":"./port-sudan/port-sudan.js","sinkat":"./sinkat/sinkat.js","suakin":"./suakin/suakin.js","tokar":"./tokar/tokar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
