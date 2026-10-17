// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tambacounda","repository":"africa","path":"senegal/tambacounda","depth":2,"parent":"senegal","children":["koumpentoum"]});
export const childModules = Object.freeze({"koumpentoum":"./koumpentoum/koumpentoum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
