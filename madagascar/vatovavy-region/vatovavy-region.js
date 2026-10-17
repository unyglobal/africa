// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vatovavy-region","repository":"africa","path":"madagascar/vatovavy-region","depth":2,"parent":"madagascar","children":["ifanadiana","mananjary","nosy-varika","sahavato"]});
export const childModules = Object.freeze({"ifanadiana":"./ifanadiana/ifanadiana.js","mananjary":"./mananjary/mananjary.js","nosy-varika":"./nosy-varika/nosy-varika.js","sahavato":"./sahavato/sahavato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
