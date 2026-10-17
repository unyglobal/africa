// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dar-es-salaam","repository":"africa","path":"tanzania/dar-es-salaam-region/dar-es-salaam","depth":3,"parent":"tanzania/dar-es-salaam-region","children":["kariakoo"]});
export const childModules = Object.freeze({"kariakoo":"./kariakoo/kariakoo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
