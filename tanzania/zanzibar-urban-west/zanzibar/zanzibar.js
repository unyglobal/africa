// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zanzibar","repository":"africa","path":"tanzania/zanzibar-urban-west/zanzibar","depth":3,"parent":"tanzania/zanzibar-urban-west","children":["ngambo","stone-town"]});
export const childModules = Object.freeze({"ngambo":"./ngambo/ngambo.js","stone-town":"./stone-town/stone-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
