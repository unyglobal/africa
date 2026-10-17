// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bloemfontein","repository":"africa","path":"south-africa/free-state/bloemfontein","depth":3,"parent":"south-africa/free-state","children":["willows"]});
export const childModules = Object.freeze({"willows":"./willows/willows.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
