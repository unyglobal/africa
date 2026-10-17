// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-vicente","repository":"africa","path":"cape-verde/sao-vicente","depth":2,"parent":"cape-verde","children":["mindelo"]});
export const childModules = Object.freeze({"mindelo":"./mindelo/mindelo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
