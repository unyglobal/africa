// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"middle-juba","repository":"africa","path":"somalia/middle-juba","depth":2,"parent":"somalia","children":["bu-aale","jilib"]});
export const childModules = Object.freeze({"bu-aale":"./bu-aale/bu-aale.js","jilib":"./jilib/jilib.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
