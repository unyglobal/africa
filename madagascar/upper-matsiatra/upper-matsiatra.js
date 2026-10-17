// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-matsiatra","repository":"africa","path":"madagascar/upper-matsiatra","depth":2,"parent":"madagascar","children":["ambalavao","fianarantsoa","ikalamavony"]});
export const childModules = Object.freeze({"ambalavao":"./ambalavao/ambalavao.js","fianarantsoa":"./fianarantsoa/fianarantsoa.js","ikalamavony":"./ikalamavony/ikalamavony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
