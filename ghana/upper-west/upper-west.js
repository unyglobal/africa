// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-west","repository":"africa","path":"ghana/upper-west","depth":2,"parent":"ghana","children":["jirapa","wa"]});
export const childModules = Object.freeze({"jirapa":"./jirapa/jirapa.js","wa":"./wa/wa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
