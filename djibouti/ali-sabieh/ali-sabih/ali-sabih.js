// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ali-sabih","repository":"africa","path":"djibouti/ali-sabieh/ali-sabih","depth":3,"parent":"djibouti/ali-sabieh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
