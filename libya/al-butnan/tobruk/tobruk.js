// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tobruk","repository":"africa","path":"libya/al-butnan/tobruk","depth":3,"parent":"libya/al-butnan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
