// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sokoto","repository":"africa","path":"nigeria/sokoto","depth":2,"parent":"nigeria","children":["gwadabawa","illela","tambuwal"]});
export const childModules = Object.freeze({"gwadabawa":"./gwadabawa/gwadabawa.js","illela":"./illela/illela.js","tambuwal":"./tambuwal/tambuwal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
