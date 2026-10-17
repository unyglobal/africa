// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-sudan","repository":"africa","path":"sudan/red-sea/port-sudan","depth":3,"parent":"sudan/red-sea","children":["west-town"]});
export const childModules = Object.freeze({"west-town":"./west-town/west-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
