// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-equatoria","repository":"africa","path":"south-sudan/central-equatoria","depth":2,"parent":"south-sudan","children":["juba","yei"]});
export const childModules = Object.freeze({"juba":"./juba/juba.js","yei":"./yei/yei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
