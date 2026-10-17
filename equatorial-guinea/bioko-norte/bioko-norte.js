// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bioko-norte","repository":"africa","path":"equatorial-guinea/bioko-norte","depth":2,"parent":"equatorial-guinea","children":["malabo"]});
export const childModules = Object.freeze({"malabo":"./malabo/malabo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
