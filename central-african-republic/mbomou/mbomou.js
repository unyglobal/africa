// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mbomou","repository":"africa","path":"central-african-republic/mbomou","depth":2,"parent":"central-african-republic","children":["bangassou"]});
export const childModules = Object.freeze({"bangassou":"./bangassou/bangassou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
