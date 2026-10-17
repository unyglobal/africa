// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mudug","repository":"africa","path":"somalia/mudug","depth":2,"parent":"somalia","children":["gaalkacyo","saaxo"]});
export const childModules = Object.freeze({"gaalkacyo":"./gaalkacyo/gaalkacyo.js","saaxo":"./saaxo/saaxo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
