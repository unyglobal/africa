// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cross-river-state","repository":"africa","path":"nigeria/cross-river-state","depth":2,"parent":"nigeria","children":["calabar","ikom","obudu","ogoja","ugep"]});
export const childModules = Object.freeze({"calabar":"./calabar/calabar.js","ikom":"./ikom/ikom.js","obudu":"./obudu/obudu.js","ogoja":"./ogoja/ogoja.js","ugep":"./ugep/ugep.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
