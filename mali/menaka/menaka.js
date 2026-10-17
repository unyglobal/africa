// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"menaka","repository":"africa","path":"mali/menaka","depth":2,"parent":"mali","children":["anderanboukan"]});
export const childModules = Object.freeze({"anderanboukan":"./anderanboukan/anderanboukan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
