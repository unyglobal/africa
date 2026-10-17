// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kabkabiyah","repository":"africa","path":"sudan/northern-darfur/kabkabiyah","depth":3,"parent":"sudan/northern-darfur","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
