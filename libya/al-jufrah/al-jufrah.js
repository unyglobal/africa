// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jufrah","repository":"africa","path":"libya/al-jufrah","depth":2,"parent":"libya","children":["hun"]});
export const childModules = Object.freeze({"hun":"./hun/hun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
