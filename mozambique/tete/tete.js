// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tete","repository":"africa","path":"mozambique/tete","depth":2,"parent":"mozambique","children":["moatize","songo","ulongue"]});
export const childModules = Object.freeze({"moatize":"./moatize/moatize.js","songo":"./songo/songo.js","ulongue":"./ulongue/ulongue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
