// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lobaye","repository":"africa","path":"central-african-republic/lobaye","depth":2,"parent":"central-african-republic","children":["bobangui","mbaiki"]});
export const childModules = Object.freeze({"bobangui":"./bobangui/bobangui.js","mbaiki":"./mbaiki/mbaiki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
