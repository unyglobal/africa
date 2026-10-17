// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bay","repository":"africa","path":"somalia/bay","depth":2,"parent":"somalia","children":["baidoa","buurhakaba","diinsoor"]});
export const childModules = Object.freeze({"baidoa":"./baidoa/baidoa.js","buurhakaba":"./buurhakaba/buurhakaba.js","diinsoor":"./diinsoor/diinsoor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
