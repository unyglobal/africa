// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"unity","repository":"africa","path":"south-sudan/unity","depth":2,"parent":"south-sudan","children":["leer"]});
export const childModules = Object.freeze({"leer":"./leer/leer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
