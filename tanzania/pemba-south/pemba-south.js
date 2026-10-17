// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pemba-south","repository":"africa","path":"tanzania/pemba-south","depth":2,"parent":"tanzania","children":["chake-chake","mkoani"]});
export const childModules = Object.freeze({"chake-chake":"./chake-chake/chake-chake.js","mkoani":"./mkoani/mkoani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
