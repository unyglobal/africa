// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tanganyika","repository":"africa","path":"dr-congo/tanganyika","depth":2,"parent":"dr-congo","children":["baudhuinville","kabalo","kalemie","kalima","kituku","kongolo","manono","nyunzu","pepa"]});
export const childModules = Object.freeze({"baudhuinville":"./baudhuinville/baudhuinville.js","kabalo":"./kabalo/kabalo.js","kalemie":"./kalemie/kalemie.js","kalima":"./kalima/kalima.js","kituku":"./kituku/kituku.js","kongolo":"./kongolo/kongolo.js","manono":"./manono/manono.js","nyunzu":"./nyunzu/nyunzu.js","pepa":"./pepa/pepa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
