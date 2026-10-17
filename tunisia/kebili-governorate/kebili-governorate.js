// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kebili-governorate","repository":"africa","path":"tunisia/kebili-governorate","depth":2,"parent":"tunisia","children":["douz","kebili"]});
export const childModules = Object.freeze({"douz":"./douz/douz.js","kebili":"./kebili/kebili.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
