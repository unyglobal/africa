// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cape-verde","repository":"africa","path":"cape-verde","depth":1,"parent":"","children":["praia","sal","santa-catarina","sao-vicente"]});
export const childModules = Object.freeze({"praia":"./praia/praia.js","sal":"./sal/sal.js","santa-catarina":"./santa-catarina/santa-catarina.js","sao-vicente":"./sao-vicente/sao-vicente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
