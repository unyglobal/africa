// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leribe","repository":"africa","path":"lesotho/leribe","depth":2,"parent":"lesotho","children":["hlotse","maputsoe"]});
export const childModules = Object.freeze({"hlotse":"./hlotse/hlotse.js","maputsoe":"./maputsoe/maputsoe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
