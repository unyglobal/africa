// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouham","repository":"africa","path":"central-african-republic/ouham","depth":2,"parent":"central-african-republic","children":["bossangoa"]});
export const childModules = Object.freeze({"bossangoa":"./bossangoa/bossangoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
