// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"donga","repository":"africa","path":"benin/donga","depth":2,"parent":"benin","children":["bassila","djougou","kopargo","ouake"]});
export const childModules = Object.freeze({"bassila":"./bassila/bassila.js","djougou":"./djougou/djougou.js","kopargo":"./kopargo/kopargo.js","ouake":"./ouake/ouake.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
