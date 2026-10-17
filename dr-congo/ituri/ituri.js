// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ituri","repository":"africa","path":"dr-congo/ituri","depth":2,"parent":"dr-congo","children":["aru","bunia","djugu","mangbwalu"]});
export const childModules = Object.freeze({"aru":"./aru/aru.js","bunia":"./bunia/bunia.js","djugu":"./djugu/djugu.js","mangbwalu":"./mangbwalu/mangbwalu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
