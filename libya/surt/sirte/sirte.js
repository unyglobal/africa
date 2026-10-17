// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sirte","repository":"africa","path":"libya/surt/sirte","depth":3,"parent":"libya/surt","children":["ribat"]});
export const childModules = Object.freeze({"ribat":"./ribat/ribat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
