// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ogooue-ivindo","repository":"africa","path":"gabon/ogooue-ivindo","depth":2,"parent":"gabon","children":["makokou"]});
export const childModules = Object.freeze({"makokou":"./makokou/makokou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
