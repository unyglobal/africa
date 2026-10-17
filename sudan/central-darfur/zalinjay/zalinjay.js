// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zalinjay","repository":"africa","path":"sudan/central-darfur/zalinjay","depth":3,"parent":"sudan/central-darfur","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
