// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ali-sabieh","repository":"africa","path":"djibouti/ali-sabieh","depth":2,"parent":"djibouti","children":["ali-sabih"]});
export const childModules = Object.freeze({"ali-sabih":"./ali-sabih/ali-sabih.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
