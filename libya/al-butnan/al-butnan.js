// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-butnan","repository":"africa","path":"libya/al-butnan","depth":2,"parent":"libya","children":["tobruk"]});
export const childModules = Object.freeze({"tobruk":"./tobruk/tobruk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
