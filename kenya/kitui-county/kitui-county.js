// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kitui-county","repository":"africa","path":"kenya/kitui-county","depth":2,"parent":"kenya","children":["kitui","mwingi"]});
export const childModules = Object.freeze({"kitui":"./kitui/kitui.js","mwingi":"./mwingi/mwingi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
