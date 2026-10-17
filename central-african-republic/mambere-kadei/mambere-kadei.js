// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mambere-kadei","repository":"africa","path":"central-african-republic/mambere-kadei","depth":2,"parent":"central-african-republic","children":["berberati"]});
export const childModules = Object.freeze({"berberati":"./berberati/berberati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
