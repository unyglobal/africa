// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sila","repository":"africa","path":"chad/sila","depth":2,"parent":"chad","children":["goz-beida"]});
export const childModules = Object.freeze({"goz-beida":"./goz-beida/goz-beida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
