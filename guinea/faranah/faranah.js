// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faranah","repository":"africa","path":"guinea/faranah","depth":2,"parent":"guinea","children":["albaderia","arfa-moussaia","banko","bissikrima","dabola","dinguiraye","dogomet","kissidougou","yende-millimou"]});
export const childModules = Object.freeze({"albaderia":"./albaderia/albaderia.js","arfa-moussaia":"./arfa-moussaia/arfa-moussaia.js","banko":"./banko/banko.js","bissikrima":"./bissikrima/bissikrima.js","dabola":"./dabola/dabola.js","dinguiraye":"./dinguiraye/dinguiraye.js","dogomet":"./dogomet/dogomet.js","kissidougou":"./kissidougou/kissidougou.js","yende-millimou":"./yende-millimou/yende-millimou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
