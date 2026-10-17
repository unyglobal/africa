// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lac","repository":"africa","path":"chad/lac","depth":2,"parent":"chad","children":["bol"]});
export const childModules = Object.freeze({"bol":"./bol/bol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
