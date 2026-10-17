// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lomami","repository":"africa","path":"dr-congo/lomami","depth":2,"parent":"dr-congo","children":["gandajika","kabinda","lubao","luputa","mwene-ditu"]});
export const childModules = Object.freeze({"gandajika":"./gandajika/gandajika.js","kabinda":"./kabinda/kabinda.js","lubao":"./lubao/lubao.js","luputa":"./luputa/luputa.js","mwene-ditu":"./mwene-ditu/mwene-ditu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
