// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kemo","repository":"africa","path":"central-african-republic/kemo","depth":2,"parent":"central-african-republic","children":["dekoa","sibut"]});
export const childModules = Object.freeze({"dekoa":"./dekoa/dekoa.js","sibut":"./sibut/sibut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
