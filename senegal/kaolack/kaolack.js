// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaolack","repository":"africa","path":"senegal/kaolack","depth":2,"parent":"senegal","children":["gandiaye","guinguineo","kahone","nioro-du-rip"]});
export const childModules = Object.freeze({"gandiaye":"./gandiaye/gandiaye.js","guinguineo":"./guinguineo/guinguineo.js","kahone":"./kahone/kahone.js","nioro-du-rip":"./nioro-du-rip/nioro-du-rip.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
