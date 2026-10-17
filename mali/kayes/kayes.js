// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kayes","repository":"africa","path":"mali/kayes","depth":2,"parent":"mali","children":["bafoulabe","diema","kita","mahina","nioro","sagalo"]});
export const childModules = Object.freeze({"bafoulabe":"./bafoulabe/bafoulabe.js","diema":"./diema/diema.js","kita":"./kita/kita.js","mahina":"./mahina/mahina.js","nioro":"./nioro/nioro.js","sagalo":"./sagalo/sagalo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
