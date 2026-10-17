// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gash-barka","repository":"africa","path":"eritrea/gash-barka","depth":2,"parent":"eritrea","children":["barentu","himora"]});
export const childModules = Object.freeze({"barentu":"./barentu/barentu.js","himora":"./himora/himora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
