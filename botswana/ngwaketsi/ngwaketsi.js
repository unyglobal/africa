// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ngwaketsi","repository":"africa","path":"botswana/ngwaketsi","depth":2,"parent":"botswana","children":["kanye","mosopa"]});
export const childModules = Object.freeze({"kanye":"./kanye/kanye.js","mosopa":"./mosopa/mosopa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
