// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lakes","repository":"africa","path":"south-sudan/lakes","depth":2,"parent":"south-sudan","children":["rumbek"]});
export const childModules = Object.freeze({"rumbek":"./rumbek/rumbek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
