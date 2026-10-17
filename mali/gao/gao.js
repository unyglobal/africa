// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gao","repository":"africa","path":"mali/gao","depth":2,"parent":"mali","children":["bamba","bourem","i-n-tillit"]});
export const childModules = Object.freeze({"bamba":"./bamba/bamba.js","bourem":"./bourem/bourem.js","i-n-tillit":"./i-n-tillit/i-n-tillit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
