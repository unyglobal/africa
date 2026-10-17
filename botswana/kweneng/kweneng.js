// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kweneng","repository":"africa","path":"botswana/kweneng","depth":2,"parent":"botswana","children":["gabane","mmopone","mogoditshane","molepolole","thamaga"]});
export const childModules = Object.freeze({"gabane":"./gabane/gabane.js","mmopone":"./mmopone/mmopone.js","mogoditshane":"./mogoditshane/mogoditshane.js","molepolole":"./molepolole/molepolole.js","thamaga":"./thamaga/thamaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
