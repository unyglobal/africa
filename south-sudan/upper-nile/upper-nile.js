// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-nile","repository":"africa","path":"south-sudan/upper-nile","depth":2,"parent":"south-sudan","children":["malakal"]});
export const childModules = Object.freeze({"malakal":"./malakal/malakal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
