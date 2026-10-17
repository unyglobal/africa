// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouham-pende","repository":"africa","path":"central-african-republic/ouham-pende","depth":2,"parent":"central-african-republic","children":["bocaranga","bozoum"]});
export const childModules = Object.freeze({"bocaranga":"./bocaranga/bocaranga.js","bozoum":"./bozoum/bozoum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
