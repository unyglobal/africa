// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mayo-kebbi-ouest","repository":"africa","path":"chad/mayo-kebbi-ouest","depth":2,"parent":"chad","children":["lere","mboursou-lere","pala"]});
export const childModules = Object.freeze({"lere":"./lere/lere.js","mboursou-lere":"./mboursou-lere/mboursou-lere.js","pala":"./pala/pala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
