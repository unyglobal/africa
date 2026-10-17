// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sofala","repository":"africa","path":"mozambique/sofala","depth":2,"parent":"mozambique","children":["beira","buzi","caia","dondo","gorongosa","marromeu","nhamatanda"]});
export const childModules = Object.freeze({"beira":"./beira/beira.js","buzi":"./buzi/buzi.js","caia":"./caia/caia.js","dondo":"./dondo/dondo.js","gorongosa":"./gorongosa/gorongosa.js","marromeu":"./marromeu/marromeu.js","nhamatanda":"./nhamatanda/nhamatanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
