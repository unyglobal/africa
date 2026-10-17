// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guiberoua","repository":"africa","path":"ivory-coast/goh-djiboua/guiberoua","depth":3,"parent":"ivory-coast/goh-djiboua","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
