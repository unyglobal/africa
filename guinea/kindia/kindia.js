// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kindia","repository":"africa","path":"guinea/kindia","depth":2,"parent":"guinea","children":["coyah","dubreka","forecariah","kolente","maneah","telimele"]});
export const childModules = Object.freeze({"coyah":"./coyah/coyah.js","dubreka":"./dubreka/dubreka.js","forecariah":"./forecariah/forecariah.js","kolente":"./kolente/kolente.js","maneah":"./maneah/maneah.js","telimele":"./telimele/telimele.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
