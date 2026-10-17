// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gambia","repository":"africa","path":"gambia","depth":1,"parent":"","children":["banjul","lower-river","north-bank","upper-river","western"]});
export const childModules = Object.freeze({"banjul":"./banjul/banjul.js","lower-river":"./lower-river/lower-river.js","north-bank":"./north-bank/north-bank.js","upper-river":"./upper-river/upper-river.js","western":"./western/western.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
