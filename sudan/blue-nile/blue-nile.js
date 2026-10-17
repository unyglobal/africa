// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blue-nile","repository":"africa","path":"sudan/blue-nile","depth":2,"parent":"sudan","children":["ad-damazin","er-roseires"]});
export const childModules = Object.freeze({"ad-damazin":"./ad-damazin/ad-damazin.js","er-roseires":"./er-roseires/er-roseires.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
