// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matam","repository":"africa","path":"senegal/matam","depth":2,"parent":"senegal","children":["kanel","ouro-sogui","thilogne"]});
export const childModules = Object.freeze({"kanel":"./kanel/kanel.js","ouro-sogui":"./ouro-sogui/ouro-sogui.js","thilogne":"./thilogne/thilogne.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
