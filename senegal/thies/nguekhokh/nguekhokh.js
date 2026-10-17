// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nguekhokh","repository":"africa","path":"senegal/thies/nguekhokh","depth":3,"parent":"senegal/thies","children":["nguekokh-ouolof","nguekokh-serere"]});
export const childModules = Object.freeze({"nguekokh-ouolof":"./nguekokh-ouolof/nguekokh-ouolof.js","nguekokh-serere":"./nguekokh-serere/nguekokh-serere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
