// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central","repository":"africa","path":"botswana/central","depth":2,"parent":"botswana","children":["bobonong","letlhakane","mahalapye","palapye","serowe","tonota","tutume"]});
export const childModules = Object.freeze({"bobonong":"./bobonong/bobonong.js","letlhakane":"./letlhakane/letlhakane.js","mahalapye":"./mahalapye/mahalapye.js","palapye":"./palapye/palapye.js","serowe":"./serowe/serowe.js","tonota":"./tonota/tonota.js","tutume":"./tutume/tutume.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
