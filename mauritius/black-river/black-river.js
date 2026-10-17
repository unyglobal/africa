// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"black-river","repository":"africa","path":"mauritius/black-river","depth":2,"parent":"mauritius","children":["bambous"]});
export const childModules = Object.freeze({"bambous":"./bambous/bambous.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
