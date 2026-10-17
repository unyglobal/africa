// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mombasa-county","repository":"africa","path":"kenya/mombasa-county","depth":2,"parent":"kenya","children":["jomvu","mombasa"]});
export const childModules = Object.freeze({"jomvu":"./jomvu/jomvu.js","mombasa":"./mombasa/mombasa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
