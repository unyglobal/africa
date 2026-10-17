// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-equatoria","repository":"africa","path":"south-sudan/eastern-equatoria","depth":2,"parent":"south-sudan","children":["pajok","torit"]});
export const childModules = Object.freeze({"pajok":"./pajok/pajok.js","torit":"./torit/torit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
