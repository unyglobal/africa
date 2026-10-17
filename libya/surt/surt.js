// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"surt","repository":"africa","path":"libya/surt","depth":2,"parent":"libya","children":["bin-jawwad","sirte"]});
export const childModules = Object.freeze({"bin-jawwad":"./bin-jawwad/bin-jawwad.js","sirte":"./sirte/sirte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
